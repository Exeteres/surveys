<template>
  <v-divider class="mb-2" />
  <div class="text-h6 mb-2">2. Что вам нравится в газпроме?</div>
  <div class="text-subtitle mb-2">{{ $t("survey_session.multiple_choice") }}</div>

  <v-checkbox hide-details density="compact" label="Газ" value="a"></v-checkbox>
  <v-checkbox hide-details density="compact" label="Нефть" value="b"></v-checkbox>
</template>

<script setup lang="ts">
</script>