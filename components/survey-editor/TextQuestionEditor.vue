<template></template>

<script setup lang="ts">
import type { SurveyQuestionModel } from "~/api"
import { useSurveyStore } from "~/stores/admin/survey"

defineProps<{
  question: SurveyQuestionModel
}>()

const surveyStore = useSurveyStore()
</script>