export default defineNuxtRouteMiddleware(to => {
  console.log("Auth middleware")

  if (to.name === "login") {
    console.log("Login page")
    return
  }

  const authStore = useAuthStore()

  console.log(authStore.accessToken)

  if (!authStore.isAuthenticated) {
    console.log("Not authenticated")
    return navigateTo({ name: "login" })
  }
})
