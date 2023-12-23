export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: ["@pinia/nuxt", "vuetify-nuxt-module", "@nuxtjs/i18n", "@pinia-plugin-persistedstate/nuxt"],
  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: "dark",
      },
      icons: {
        defaultSet: "mdi",
      },
    },
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL,
    },
  },
  piniaPersistedstate: {
    storage: "localStorage",
  },
})
