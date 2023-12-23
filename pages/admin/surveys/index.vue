<template>
  <v-card>
    <v-toolbar>
      <v-toolbar-title>{{ $t("surveys.title") }}</v-toolbar-title>
      <v-toolbar-items variant="elevated">
        <CreateSurveyDialog @created="surveysStore.fetch" />
      </v-toolbar-items>
    </v-toolbar>

    <v-data-table-server
      :items="surveysStore.items"
      :headers="headers"
      :loading="surveysStore.loading"
      v-model:search="surveysStore.search"
      v-model:page="surveysStore.page"
      v-model:items-per-page="surveysStore.size"
      :items-length="surveysStore.totalCount"
    >
      <template #item.actions="{ item }">
        <v-btn variant="outlined" @click="navigateTo({ name:'admin-surveys-id', params: { id: item.id } })">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </template>
    </v-data-table-server>
  </v-card>
</template>

<script setup lang="ts">
import { useSurveysStore } from "~/stores/admin/surveys"
import CreateSurveyDialog from "~/components/surveys/CreateSurveyDialog.vue"

const { t } = useI18n()

const headers = [
  { title: t("common.id"), value: "id" },
  { title: t("common.title"), value: "title" },
  { key: "actions", title: t("common.actions") },
]

const surveysStore = useSurveysStore()
</script>