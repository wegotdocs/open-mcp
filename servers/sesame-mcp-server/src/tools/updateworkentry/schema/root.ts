import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().uuid().describe("Work Entry ID"),
  "workEntryType": z.string().describe("value should be \"work\""),
  "workEntryIn": z.any(),
  "workEntryOut": z.any().optional()
}