<template>
  <v-row justify="center">
    <v-col sm="12" md="6" lg="4">
      <v-card>
        <v-card-title class="text-h5 mt-4 mb-4">Опрос для сотрудников газпрома блин</v-card-title>

        <v-card-text>
          <SingleQuestionEditor />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import SingleQuestionEditor from "~/components/survey-editor/SingleQuestionEditor.vue"
</script>