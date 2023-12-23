<template>
  <v-card>
    <v-card-title>{{ $t("users.details_title") }}</v-card-title>

    <v-form>
      <v-text-field
        variant="outlined"
        density="compact"
        :label="$t('users.username')"
        required
      ></v-text-field>
    </v-form>
  </v-card>
</template>

<script setup lang="ts">
import { useUsersStore } from "~/stores/admin/users"

const usersStore = useUsersStore()
</script>