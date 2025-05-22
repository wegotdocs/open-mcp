import { z } from "zod"

export const inputParamsSchema = {
  "cursor": z.string().describe("A token used to return the next page of a previous request. Use the cursor provided in the previous response.").optional(),
  "active_only": z.boolean().describe("Whether we only return active offices.").optional()
}