<template>
  <v-dialog v-model="modal" max-width="500px">
    <template v-slot:activator="{ props }">
      <v-btn
        color="primary"
        dark
        class="mb-2"
        v-bind="props"
      >
        {{ $t("common.create") }}
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">{{ $t("surveys.create") }}</span>
      </v-card-title>

      <v-card-text>
        <v-text-field
          v-model="newSurveyStore.item.title"
          variant="outlined"
          density="compact"
          :label="$t('common.title')"
          required
        ></v-text-field>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="blue-darken-1"
          variant="text"
          @click="modal = false"
        >
          {{ $t("common.cancel") }}
        </v-btn>
        <v-btn
          color="blue-darken-1"
          variant="text"
          :disabled="newSurveyStore.loading"
          :loading="newSurveyStore.loading"
          @click="create"
        >
          {{ $t("common.create") }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { useNewSurveyStore } from "~/stores/admin/new-survey"

const modal = ref(false)
const newSurveyStore = useNewSurveyStore()

const emit = defineEmits<{
  (event: "created"): void
}>()

const create = async () => {
  await newSurveyStore.create()
  modal.value = false
  emit("created")
}
</script>