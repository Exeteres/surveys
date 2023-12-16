import { parseJwt } from "~/utils/jwt"
import { api } from "~/api"

const enum UserRole {
  Admin = "admin",
  User = "user",
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

    return user.value.name === "admin"
  })

  const isAccessTokenExpired = computed(() => {
    if (!accessTokenPayload.value) {
      return true
    }

    return accessTokenPayload.value.exp < Date.now() / 1000
  })

  const login = async (username: string, password: string): Promise<boolean> => {
    try {
      const { access, refresh } = await api.token.postApiToken({
        version: "1.0",
        requestBody: {
          login: username,
          password,
        },
      })

      accessToken.value = access
      refreshToken.value = refresh

      console.log(access, refresh)

      return true
    } catch (e) {
      return false
    }
  }

  const refresh = async () => {
    const response = await api.token.postApiTokenRefresh({
      version: "1.0",
      requestBody: {
        refresh: refreshToken.value,
      },
    })

    const { accessToken: newAccessToken } = await response.json()

    accessToken.value = newAccessToken
  }

  return {
    user,
    isAuthenticated,
    isAdministrator,
    login,
    refresh,
    isAccessTokenExpired,
  }
}, {
  persist: true,
})
