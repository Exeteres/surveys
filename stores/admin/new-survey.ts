import { useNewEntity } from "~/utils/new-entity"
import type { SurveyWriteModel } from "~/api"

export const useNewSurveyStore = defineStore("new-survey", () => {
  return useNewEntity<SurveyWriteModel>({
    createDefault: () => ({ title: "", jsonContent: "" }),
    createEntity: (api, params) => api.surveys.createSurvey(params),
  })
}, {
  persist: {
    paths: ["item"],
  },
})