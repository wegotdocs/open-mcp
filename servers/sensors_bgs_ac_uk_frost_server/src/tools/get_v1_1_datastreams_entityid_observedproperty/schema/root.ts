import { z } from "zod"

export const inputParamsSchema = {
  "entityId": z.number().int().describe("The id of the requested entity"),
  "$select": z.string().describe("The list of properties that need to be returned").optional(),
  "$expand": z.string().describe("The list of related queries that need to be included in the result").optional()
}