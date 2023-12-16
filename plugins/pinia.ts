import persistedState from "pinia-plugin-persistedstate"

export default defineNuxtPlugin(({ $pinia }) => {
  if (process.server) {
    return
  }

  // @ts-ignore
  $pinia.use(persistedState)
})