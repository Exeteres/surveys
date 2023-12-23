<template>
  <v-menu offset-y open-on-hover>
    <template v-slot:activator="{ props }">
      <div v-if="authStore.isAuthenticated" class="text-overline">{{ authStore.user.name }}</div>

      <v-btn icon v-bind="props">
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </template>

    <v-list>
      <v-list-item link :title="$t('appbar.logout')" @click="authStore.logout()" />
    </v-list>
  </v-menu>
</template>

<script setup lang="ts">
const authStore = useAuthStore()
</script>