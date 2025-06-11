import { z } from "zod"

export const inputParamsSchema = {
  "pageSize": z.number().int().describe("Limit number of locations to return").optional(),
  "after": z.number().int().describe("Last Location Identifier from previous page").optional()
}