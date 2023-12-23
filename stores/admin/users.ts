import { type UserModel } from "~/api"

export const useUsersStore = defineStore("users", () => {
  const apiCollection = useApiCollection<UserModel>({
    fetchSelect: (api, params) => api.users.selectUsers(params),
  })

  return {
    ...apiCollection,
  }
})