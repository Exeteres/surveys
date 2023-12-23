<template>
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const authStore = useAuthStore()
const route = useRoute()

const layout = computed(() => {
  if (route.name === "login") {
    return "empty"
  }

  if (authStore.isAdministrator) {
    return "admin"
  }

  return "default"
})
</script>