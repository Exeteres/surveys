import { ApiClient } from "~/api/_generated"

export const api = new ApiClient({
  // TODO move to env
  BASE: "http://localhost:5265",
})