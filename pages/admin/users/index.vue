<template>
  <v-card>
    <v-toolbar>
      <v-toolbar-title>{{ $t("users.title") }}</v-toolbar-title>
    </v-toolbar>

    <v-data-table-server
      :items="usersStore.items"
      :headers="headers"
      :loading="usersStore.loading"
      v-model:search="usersStore.search"
      v-model:page="usersStore.page"
      v-model:items-per-page="usersStore.size"
      :items-length="usersStore.totalCount"
    >
      <template #item.actions="{ item }">
      </template>
    </v-data-table-server>
  </v-card>
</template>

<script setup lang="ts">
import { useUsersStore } from "~/stores/admin/users"

const { t } = useI18n()

const headers = [
  { title: t("common.id"), value: "id" },
  { title: t("users.username"), value: "userName" },
  { title: t("users.email"), value: "email" },
  { title: t("users.role"), value: "role" },
  { key: "actions", title: t("common.actions") },
]

const usersStore = useUsersStore()
</script>