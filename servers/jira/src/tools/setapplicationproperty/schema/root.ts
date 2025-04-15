import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The key of the application property to update."),
  "b_id": z.string().describe("The ID of the application property.").optional(),
  "value": z.string().describe("The new value.").optional()
}