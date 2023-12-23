import { ApiClient, useApi } from "~/api"
import type { Ref } from "vue"

export interface FetchEntityParams {
  readonly id: string
}

export type FetchEntity<T> = (api: ApiClient, params: FetchEntityParams) => Promise<T>

export interface ApiEntityOptions<T> {
  readonly fetchEntity: FetchEntity<T>
  readonly entityId?: Ref<string>
  autoFetch?: boolean
}

export function useApiEntity<T>({ fetchEntity, entityId, autoFetch = true }: ApiEntityOptions<T>) {
  // Get the id from the route params by default
  const resolvedGetEntityId = entityId ?? computed(() => {
    const route = useRoute()

    return route.params.id as string
  })

  const item = ref<T | null>(null) as Ref<T | null>
  const loading = ref(false)
  const notFound = ref(false)

  const api = useApi()

  const fetch = async () => {
    loading.value = true

    try {
      item.value = await fetchEntity(api, { id: resolvedGetEntityId.value })
    } catch (error) {
      console.error(`Failed to fetch entity: ${error}, setting notFound to true`)
      notFound.value = true
    } finally {
      loading.value = false
    }
  }

  if (autoFetch) {
    void fetch()
  }

  return {
    item,
    loading,
    notFound,
    fetch,
  }
}