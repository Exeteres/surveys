export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "vuetify-nuxt-module", "@nuxtjs/i18n"],
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
    langDir: "locales",
    locales: [
      { code: "en", file: "en.json" },
      { code: "ru", file: "ru.json" },
    ],
    defaultLocale: "ru",
  },
  pinia:{

  }
})
