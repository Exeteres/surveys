import { ApiClient, useApi } from "~/api"

export interface NewEntityParams<T> {
  readonly requestBody: T
}

export interface ApiNewEntityOptions<T> {
  createDefault: () => T
  createEntity: (api: ApiClient, params: NewEntityParams<T>) => Promise<T>
}

export function useNewEntity<T extends object>(options: ApiNewEntityOptions<T>) {
  const item = reactive(options.createDefault()) as T
  const api = useApi()
  const loading = ref(false)

  const create = async () => {
    loading.value = true

    try {
      await options.createEntity(api, { requestBody: item })
      Object.assign(item, options.createDefault())
    } finally {
      loading.value = false
    }
  }

  return {
    item,
    create,
    loading,
  }
}
