import { z } from "zod"

export const inputParamsSchema = {
  "did": z.string(),
  "fields": z.string().describe("CSV of fields to return (all, \"blank\" or see list of all field names below)").optional()
}