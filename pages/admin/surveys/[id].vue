<template>
  <v-skeleton-loader
    v-if="surveyStore.loading"
    type="card"
    elevation="2"
    max-height="400"
  ></v-skeleton-loader>

  <v-alert
    v-if="surveyStore.notFound"
    type="error"
    elevation="2"
    max-height="400"
  >
    {{ $t("surveys.not_found") }}
  </v-alert>

  <v-card v-if="surveyStore.item">
    <v-toolbar>
      <v-toolbar-title>{{ $t("survey.title", { id: surveyStore.item.id }) }}</v-toolbar-title>
    </v-toolbar>

    <v-card-text>
      <v-text-field
        variant="outlined"
        density="compact"
        :label="$t('common.title')"
        required
        :model-value="surveyStore.item.title"
        @update:model-value="value => surveyStore.updateSurvey({ title: value })"
      ></v-text-field>

      <v-textarea
        variant="outlined"
        density="compact"
        counter
        :label="$t('common.description')"
        required
        :model-value="surveyStore.item.jsonContent"
        @update:model-value="value => surveyStore.updateSurvey({ jsonContent: value })"
      ></v-textarea>

      <span v-if="surveyStore.item.isChanged" class="text-warning">{{ $t("common.unsaved_changes") }}</span>
    </v-card-text>

    <v-card-text>
      <div
        v-for="question in surveyStore.item.questions"
        :key="question.id"
        class="mt-4"
      >
        <v-divider class="mb-4" />

        <div class="d-flex">
          <v-text-field
            :model-value="question.title"
            @update:model-value="value => surveyStore.updateQuestion(question.id!, { title: value })"
            variant="outlined"
            density="compact"
            :label="$t('common.title')"
            required
          ></v-text-field>

          <v-btn
            color="red"
            variant="outlined"
            style="height: 40px"
            class="ml-4"
            @click="surveyStore.deleteQuestion(question.id!)"
          >
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </div>

        <v-select
          :model-value="question.type"
          @update:model-value="value => surveyStore.updateQuestion(question.id!, { type: value })"
          :items="questionTypeItems"
          item-title="text"
          item-value="value"
          dense
          variant="outlined"
          density="compact"
          label="Type"
          required
        ></v-select>

        <component
          :is="resolveEditorComponent(question as SurveyQuestionModel)"
          :question="question"
        />

        <div v-if="surveyStore.checkQuestionDeleted(question.id!)" class="text-error mt-4">
          {{ $t("survey.question_will_be_deleted") }}
        </div>
        <div v-else-if="surveyStore.checkQuestionHasChanges(question.id!)" class="text-warning mt-4">
          {{ $t("common.unsaved_changes") }}
        </div>
      </div>

    </v-card-text>
    <v-card-actions>
      <v-btn
        color="primary"
        variant="outlined"
        prepend-icon="mdi-plus"
        @click="surveyStore.createQuestion"
      >
        {{ $t("survey.add_question") }}
      </v-btn>

      <v-btn
        color="green"
        variant="outlined"
        :disabled="!surveyStore.hasChanges"
        :loading="surveyStore.saveLoading"
        @click="surveyStore.save"
        prepend-icon="mdi-content-save"
      >
        {{ $t("common.save") }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import SingleQuestionEditor from "~/components/survey-editor/SingleQuestionEditor.vue"
import { useSurveyStore } from "~/stores/admin/survey"
import type { SurveyQuestionModel } from "~/api"
import { SurveyQuestionType } from "~/api"
import MultipleQuestionEditor from "~/components/survey-editor/MultipleQuestionEditor.vue"
import TextQuestionEditor from "~/components/survey-editor/TextQuestionEditor.vue"

const surveyStore = useSurveyStore()

const { t } = useI18n()

const questionTypeItems = [
  { text: t("question_type.single"), value: SurveyQuestionType.SINGLE },
  { text: t("question_type.multiple"), value: SurveyQuestionType.MULTIPLE },
  { text: t("question_type.text"), value: SurveyQuestionType.TEXT },
]

const resolveEditorComponent = (question: SurveyQuestionModel) => {
  switch (question.type) {
    case SurveyQuestionType.SINGLE: {
      return SingleQuestionEditor
    }
    case SurveyQuestionType.MULTIPLE: {
      return MultipleQuestionEditor
    }
    case SurveyQuestionType.TEXT: {
      return TextQuestionEditor
    }
  }

  throw new Error(`Unknown question type: ${question.type}`)
}
</script>