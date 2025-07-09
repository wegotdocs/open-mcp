import { z } from "zod"

export const inputParamsSchema = {
  "entityId": z.number().int().describe("The id of the requested entity"),
  "$skip": z.number().int().describe("The number of elements to skip from the collection").optional(),
  "$top": z.number().int().describe("The number of elements to return").optional(),
  "$count": z.boolean().describe("Flag indicating if the total number of items in the collection should be returned.").optional(),
  "$select": z.string().describe("The list of properties that need to be returned").optional(),
  "$expand": z.string().describe("The list of related queries that need to be included in the result").optional(),
  "$filter": z.string().describe("A filter query").optional()
}