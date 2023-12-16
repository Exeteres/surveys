<template>
  <v-row justify="center">
    <v-col sm="12" md="6" lg="4">
      <v-card>
        <v-card-title class="text-h5 mt-4 mb-4">Опрос для сотрудников газпрома блин</v-card-title>

        <v-card-text>
          <SingleQuestionSession />
          <MultipleQuestionSession />
          <TextQuestionSession />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import SingleQuestionSession from "~/components/survey-session/SingleQuestionSession.vue"
import MultipleQuestionSession from "~/components/survey-session/MultipleQuestionSession.vue"
import TextQuestionSession from "~/components/survey-session/TextQuestionSession.vue"
</script>