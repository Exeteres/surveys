import { ApiClient, useApi } from "~/api"

export interface SelectModel<T> {
  readonly items?: T[] | null
  readonly totalCount?: number | null
}

export interface FetchSelectParams {
  readonly page?: number
  readonly size?: number
  readonly search?: string
}

export type FetchSelect<T> = (api: ApiClient, params: FetchSelectParams) => Promise<SelectModel<T>>

export interface ApiCollectionOptions<T> {
  readonly fetchSelect: FetchSelect<T>
  autoFetch?: boolean
}

export function useApiCollection<T>({ fetchSelect, autoFetch = true }: ApiCollectionOptions<T>) {
  const items = ref<T[]>([]) as Ref<T[]>
  const totalCount = ref(0)
  const loading = ref(false)

  const page = ref(1)
  const size = ref(10)
  const search = ref("")

  const api = useApi()

  const fetch = async () => {
    loading.value = true

    try {
      const { items: newItems, totalCount: newTotalCount } = await fetchSelect(api, {
        page: page.value,
        size: size.value,
        search: search.value,
      })

      items.value = newItems ?? []
      totalCount.value = newTotalCount ?? 0
    } finally {
      loading.value = false
    }
  }

  if (autoFetch) {
    void fetch()
  }

  watch([page, size, search], fetch)

  return {
    items,
    totalCount,
    loading,
    page,
    size,
    search,
    fetch,
  }
}