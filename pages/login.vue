<template>
  <v-container fill-height>
    <v-row align="center" justify="center">
      <v-col sm="12" md="6" lg="4">
        <v-card>
          <v-card-title>{{ $t("login.title") }}</v-card-title>
          <v-card-text>
            <v-form>
              <v-alert
                v-if="error"
                type="error"
                class="mb-4"
                dense
                outlined
                :value="true"
                :dismissible="false"
              >
                {{ $t("login.error") }}
              </v-alert>

              <v-text-field
                v-model="username"
                variant="outlined"
                density="compact"
                :label="$t('login.username')"
                required
              ></v-text-field>

              <v-text-field
                v-model="password"
                variant="outlined"
                density="compact"
                :label="$t('login.password')"
                type="password"
                required
              ></v-text-field>

              <v-btn @click="login" variant="outlined" :loading="loading" :disabled="!isButtonActive">
                <v-icon left>mdi-login</v-icon>
                {{ $t("login.login") }}
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const username = ref("")
const password = ref("")
const error = ref(false)
const loading = ref(false)

const authStore = useAuthStore()

const isButtonActive = computed(() => {
  return username.value.length > 0 && password.value.length > 0
})

const login = async () => {
  error.value = false
  loading.value = true

  await authStore.login(username.value, password.value)
  loading.value = false
}
</script>