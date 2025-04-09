import { z } from "zod"

export const inputParams = {
  "intent": z.string().max(5000),
  "client_secret": z.string().max(5000).describe("The client secret of the SetupIntent. We require this string if you use a publishable key to retrieve the SetupIntent.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}