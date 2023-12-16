<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on }">
      <div v-if="authStore.isAuthenticated" class="text-overline">{{ authStore.user.name }}</div>

      <v-btn icon v-on="on">
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </template>

    <v-list>
      <v-list-item>
        <v-list-item-title>{{ $t("appbar.login") }}</v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-title>{{ $t("appbar.logout") }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup lang="ts">
const authStore = useAuthStore()
</script>