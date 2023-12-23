import type {
  SurveyModel,
  SurveyQuestionAnswerModel,
  SurveyQuestionModel,
  SurveyQuestionWriteModel,
  SurveyWriteModel,
} from "~/api"
import { SurveyQuestionType, useApi } from "~/api"
import { v4 as uuid } from "uuid"
import { useApiEntity } from "~/utils/entity"

interface ChangedSurveyQuestion extends Omit<SurveyQuestionWriteModel, "answers"> {
  isCreated?: boolean
  isDeleted?: boolean

  answers?: SurveyQuestionAnswer[] | null
}

interface Survey extends Omit<SurveyModel, "questions"> {
  // Whether the survey itself has been changed (not the questions)
  isChanged?: boolean
  questions?: SurveyQuestion[] | null
}

interface SurveyQuestion extends Omit<SurveyQuestionModel, "answers"> {
  // Whether the question of the survey has been changed
  isChanged?: boolean

  answers?: SurveyQuestionAnswer[] | null
}

interface SurveyQuestionAnswer extends SurveyQuestionAnswerModel {
  isCreated?: boolean
}

export const useSurveyStore = defineStore("survey", () => {
  const api = useApi()

  const apiEntity = useApiEntity<Survey>({
    fetchEntity: (api, params) => api.surveys.getSurvey(params),
  })

  // The COW pattern is used to track changes to the survey questions
  // This ref is stored in the local storage which allows the user to have the local draft of the survey
  const changedSurveyQuestions = ref<Record<string, ChangedSurveyQuestion>>({})

  // The ids of the created survey questions
  const createdSurveyQuestionIds = ref<string[]>([])

  const changedSurvey = ref<SurveyWriteModel | null>(null)

  const createQuestion = () => {
    const questionId = uuid()

    changedSurveyQuestions.value[questionId] = {
      type: SurveyQuestionType.SINGLE,
      title: "",
      answers: [],
      groupIds: [],
      userIds: [],
      isCreated: true,
    }

    createdSurveyQuestionIds.value = [...createdSurveyQuestionIds.value, questionId]
  }

  const updateQuestion = (questionId: string, questionData: Partial<ChangedSurveyQuestion>) => {
    const currentQuestion = changedSurveyQuestions.value[questionId]
      ?? apiEntity.item.value?.questions?.find((question) => question.id === questionId)

    if (!currentQuestion) {
      console.warn(`Could not find question with id ${questionId}, possible misbehaviour`)
      return
    }

    changedSurveyQuestions.value[questionId] = {
      ...currentQuestion,
      ...questionData,
    }
  }

  const deleteQuestion = (questionId: string) => {
    const currentQuestion = changedSurveyQuestions.value[questionId]
      ?? apiEntity.item.value?.questions?.find((question) => question.id === questionId)

    if (!currentQuestion) {
      console.warn(`Could not find question with id ${questionId}, possible misbehaviour`)
      return
    }

    if (currentQuestion.isCreated) {
      // If the question is created, just remove it from the list of created questions
      // and from the changed questions

      delete changedSurveyQuestions.value[questionId]

      const index = createdSurveyQuestionIds.value.findIndex((id) => id === questionId)
      createdSurveyQuestionIds.value.splice(index, 1)
      return
    }

    // Otherwise, mark the question as deleted
    changedSurveyQuestions.value[questionId] = {
      ...currentQuestion,
      isDeleted: true,
    }
  }

  const createQuestionAnswer = (questionId: string) => {
    const answerId = uuid()

    const currentQuestion = changedSurveyQuestions.value[questionId]
      ?? apiEntity.item.value?.questions?.find((question) => question.id === questionId)

    if (!currentQuestion) {
      console.warn(`Could not find question with id ${questionId}, possible misbehaviour`)
      return
    }

    changedSurveyQuestions.value[questionId] = {
      ...currentQuestion,
      answers: [
        ...(currentQuestion.answers ?? []),
        { id: answerId, text: "", isCreated: true },
      ],
    }
  }

  const updateQuestionAnswer = (questionId: string, answerId: string, answerData: Partial<SurveyQuestionAnswerModel>) => {
    const currentQuestion = changedSurveyQuestions.value[questionId]
      ?? apiEntity.item.value?.questions?.find((question) => question.id === questionId)

    if (!currentQuestion) {
      console.warn(`Could not find question with id ${questionId}, possible misbehaviour`)
      return
    }

    const currentAnswer = currentQuestion.answers?.find((answer) => answer.id === answerId)

    if (currentAnswer) {
      changedSurveyQuestions.value[questionId] = {
        ...currentQuestion,
        answers: currentQuestion.answers?.map((answer) => {
          if (answer.id === answerId) {
            return {
              ...answer,
              ...answerData,
            }
          }

          return answer
        }),
      }
    } else {
      changedSurveyQuestions.value[questionId] = {
        ...currentQuestion,
        answers: [
          ...(currentQuestion.answers ?? []),
          { id: answerId, ...answerData },
        ],
      }
    }
  }

  const deleteQuestionAnswer = (questionId: string, answerId: string) => {
    const currentQuestion = changedSurveyQuestions.value[questionId]
      ?? apiEntity.item.value?.questions?.find((question) => question.id === questionId)

    if (!currentQuestion) {
      console.warn(`Could not find question with id ${questionId}, possible misbehaviour`)
      return
    }

    changedSurveyQuestions.value[questionId] = {
      ...currentQuestion,
      answers: currentQuestion.answers?.filter((answer) => answer.id !== answerId),
    }
  }

  const updateSurvey = (surveyData: Partial<SurveyWriteModel>) => {
    changedSurvey.value = {
      ...apiEntity.item.value,
      ...changedSurvey.value,
      ...surveyData,
    } as SurveyWriteModel
  }

  // The computed property is used to map the changed survey questions back to the survey
  const mappedItem = computed(() => {
    let item = apiEntity.item.value

    if (!item) {
      return null
    }

    let mappedQuestions = item.questions!.map((question) => {
      const changedQuestion = changedSurveyQuestions.value[question.id!]

      if (!changedQuestion) {
        return question
      }

      return {
        ...question,
        ...changedQuestion,
      }
    })

    if (createdSurveyQuestionIds.value.length > 0) {
      mappedQuestions = [
        ...mappedQuestions,
        ...createdSurveyQuestionIds.value.map((questionId) => ({ id: questionId, ...changedSurveyQuestions.value[questionId] })),
      ]
    }

    if (changedSurvey.value) {
      return {
        ...item,
        ...changedSurvey.value,
        questions: mappedQuestions,
        isChanged: true,
      }
    }

    return {
      ...item,
      questions: mappedQuestions,
    }
  })

  const saveLoading = ref(false)

  const save = async () => {
    saveLoading.value = true

    try {
      // 1. Save the survey
      if (changedSurvey.value) {
        apiEntity.item.value = await api.surveys.updateSurvey({
          id: apiEntity.item.value!.id!,
          requestBody: changedSurvey.value,
        })
      }

      // 2. Save the changed questions
      for (const questionId in changedSurveyQuestions.value) {
        let question = changedSurveyQuestions.value[questionId]

        // Delete answer ids for answers that are created
        question = {
          ...question,
          answers: question.answers?.map((answer) => {
            if (answer.isCreated) {
              return {
                ...answer,
                id: undefined,
              }
            }

            return answer
          }),
        }

        if (question.isCreated) {
          const newQuestion = await api.surveys.createSurveyQuestion({
            surveyId: apiEntity.item.value!.id!,
            requestBody: question,
          })

          apiEntity.item.value!.questions!.push(newQuestion)
        } else if (question.isDeleted) {
          await api.surveys.deleteSurveyQuestion({
            surveyId: apiEntity.item.value!.id!,
            questionId,
          })

          const index = apiEntity.item.value!.questions!.findIndex((question) => question.id === questionId)
          apiEntity.item.value!.questions!.splice(index, 1)
        } else {
          const updatedQuestion = await api.surveys.updateSurveyQuestion({
            surveyId: apiEntity.item.value!.id!,
            questionId,
            requestBody: question,
          })

          const index = apiEntity.item.value!.questions!.findIndex((question) => question.id === questionId)
          apiEntity.item.value!.questions![index] = updatedQuestion
        }
      }

      changedSurveyQuestions.value = {}
      createdSurveyQuestionIds.value = []
      changedSurvey.value = null
    } finally {
      saveLoading.value = false
    }
  }

  // Determine if there are any changes (in the survey or the questions)
  const hasChanges = computed(() => {
    if (changedSurvey.value) {
      return true
    }

    if (Object.keys(changedSurveyQuestions.value).length > 0) {
      return true
    }

    return createdSurveyQuestionIds.value.length > 0
  })

  const checkQuestionDeleted = (questionId: string) => {
    return !!changedSurveyQuestions.value[questionId]?.isDeleted
  }

  const checkQuestionHasChanges = (questionId: string) => {
    return !!changedSurveyQuestions.value[questionId]
  }

  return {
    ...apiEntity,
    item: mappedItem,

    changedSurveyQuestions,
    createdSurveyQuestionIds,
    changedSurvey,

    updateSurvey,
    createQuestion,
    updateQuestion,
    deleteQuestion,

    hasChanges,
    save,
    saveLoading,

    checkQuestionDeleted,
    checkQuestionHasChanges,

    createQuestionAnswer,
    updateQuestionAnswer,
    deleteQuestionAnswer,
  }
}, {
  persist: {
    paths: [
      "changedSurveyQuestions",
      "createdSurveyQuestionIds",
      "changedSurvey",
    ],
  },
})