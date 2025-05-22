import { z } from "zod"

export const inputParamsSchema = {
  "cursor": z.string().describe("A token used to return the next page of a previous request. Use the cursor provided in the previous response.").optional(),
  "status": z.string().describe("Status to filter by.").optional()
}