import type { SurveyModel } from "~/api"

export const useSurveysStore = defineStore("surveys", () => {
  const apiCollection = useApiCollection<SurveyModel>({
    fetchSelect: (api, params) => api.surveys.getSurveys(params),
  })

  return {
    ...apiCollection,
  }
})