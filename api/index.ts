import { ApiClient, ApiError, CancelablePromise } from "~/api/_generated"
import { FetchHttpRequest } from "~/api/_generated/core/FetchHttpRequest"
import type { ApiRequestOptions } from "~/api/_generated/core/ApiRequestOptions"

class HttpRequest extends FetchHttpRequest {
  // @ts-ignore
  public override async request<T>(options: ApiRequestOptions): CancelablePromise<T> {
    console.log(`Making ${options.method} request to ${options.url}`, options)

    if (options.url?.startsWith("/api/1/auth")) {
      // Do not intercept auth requests in order to prevent infinite loop
      return super.request(options)
    }

    const authStore = useAuthStore()

    if (authStore.isAccessTokenExpired) {
      // Preemptively refresh token if expired
      await authStore.refresh()
    }

    try {
      return await super.request(options)
    } catch (error) {
      if (error instanceof ApiError && error.status === 401) {
        // Refresh token if server for some reason doesn't accept our token
        await authStore.refresh()

        // Retry request
        return super.request(options)
      }

      throw error
    }
  }
}

export function useApi() {
  const authStore = useAuthStore()
  const runtimeConfig = useRuntimeConfig()

  return new ApiClient({
    BASE: runtimeConfig.public.apiBaseUrl,
    TOKEN: () => Promise.resolve(authStore.accessToken ?? ""),
  }, HttpRequest)
}

export * from "~/api/_generated"
