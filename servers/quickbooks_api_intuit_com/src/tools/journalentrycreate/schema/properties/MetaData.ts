import { z } from "zod"

export const inputParamsSchema = {
  "CreateTime": z.string().describe("Date and time when the journal entry was created.").optional(),
  "LastUpdatedTime": z.string().describe("Date and time when the journal entry was last updated.").optional()
}