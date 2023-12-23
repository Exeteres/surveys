<template>
  <div v-for="answer in question.answers" :key="answer.id" class="d-flex">
    <v-checkbox :value="answer.id" disabled density="compact" class="mr-2" />

    <v-text-field
      :model-value="answer.text"
      @update:model-value="value => surveyStore.updateQuestionAnswer(question.id!, answer.id!, { text: value })"
      variant="outlined"
      density="compact"
      style="width: 100%"
      required
    ></v-text-field>

    <v-btn
      color="red"
      variant="outlined"
      style="height: 40px"
      class="ml-4"
      @click="surveyStore.deleteQuestionAnswer(question.id!, answer.id!)"
    >
      <v-icon>mdi-delete</v-icon>
    </v-btn>
  </div>

  <v-btn
    color="blue-darken-1"
    variant="text"
    @click="surveyStore.createQuestionAnswer(question.id!)"
    prepend-icon="mdi-plus"
  >
    {{ $t("survey.add_answer") }}
  </v-btn>
</template>

<script setup lang="ts">
import type { SurveyQuestionModel } from "~/api"
import { useSurveyStore } from "~/stores/admin/survey"

defineProps<{
  question: SurveyQuestionModel
}>()

const surveyStore = useSurveyStore()
</script>