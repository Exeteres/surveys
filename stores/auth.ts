import { parseJwt } from "~/utils/jwt"
import { useApi } from "~/api"

const enum UserRole {
  Admin = "Admin",
  User = "User",
}

interface AccessTokenPayload {
  exp: number

  "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name": string
  "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress": string
  "http://schemas.microsoft.com/ws/2008/06/identity/claims/role": string
}

interface User {
  name: string
  role: UserRole
}

export const useAuthStore = defineStore("auth", () => {
  const accessToken = ref<string | null>(null)
  const refreshToken = ref<string | null>(null)

  const accessTokenPayload = computed((): AccessTokenPayload | null => {
    if (!accessToken.value) {
      return null
    }

    return parseJwt(accessToken.value) as AccessTokenPayload
  })

  const maybeUser = computed((): User | null => {
    const payload = accessTokenPayload.value

    if (!payload) {
      return null
    }

    return {
      name: payload["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"],
      role: payload["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] as UserRole,
    }
  })

  const user = computed(() => {
    if (!maybeUser.value) {
      throw new Error("User is not authenticated")
    }

    return maybeUser.value
  })

  const isAuthenticated = computed(() => !!maybeUser.value)

  const isAdministrator = computed(() => {
    if (!isAuthenticated.value) {
      return false
    }

    return user.value.role === UserRole.Admin
  })

  const isAccessTokenExpired = computed(() => {
    if (!accessTokenPayload.value) {
      return false
    }

    return accessTokenPayload.value.exp < Date.now() / 1000
  })

  const router = useRouter()
  const api = useApi()

  const login = async (username: string, password: string): Promise<void> => {
    try {
      const { accessToken: newAccessToken, refreshToken: newRefreshToken } = await api.auth.login({
        requestBody: {
          login: username,
          password,
        },
      })

      accessToken.value = newAccessToken!
      refreshToken.value = newRefreshToken!

      await router.push({ name: "index" })
    } catch (e) {
      console.error("Failed to login", e)
    }
  }

  const refresh = async () => {
    try {

      const { accessToken: newAccessToken, refreshToken: newRefreshToken } = await api.auth.refresh({
        requestBody: {
          accessToken: accessToken.value,
          refreshToken: refreshToken.value,
        },
      })

      accessToken.value = newAccessToken!
      refreshToken.value = newRefreshToken!
    } catch (e) {
      void logout()

      console.error("Failed to refresh token", e)
      throw new Error("Failed to refresh token")
    }
  }

  const logout = async () => {
    accessToken.value = null
    refreshToken.value = null

    await router.push({ name: "login" })
  }

  return {
    user,
    isAuthenticated,
    isAdministrator,
    login,
    refresh,
    isAccessTokenExpired,
    logout,
    accessToken,
    refreshToken,
  }
}, {
  persist: {
    paths: ["accessToken", "refreshToken"],
  },
})
