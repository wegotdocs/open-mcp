import { z } from "zod"

export const inputParamsSchema = {
  "CreateTime": z.string().describe("Date and time when the item was created.").optional(),
  "LastUpdatedTime": z.string().describe("Date and time when the item was last updated.").optional()
}