import en from "~/locales/en"
import ru from "~/locales/ru"

export default defineI18nConfig(() => ({
  messages: { en, ru },
  defaultLocale: "ru",
  strategy: "no_prefix",
}))