import { z } from "zod"

export const inputParams = {
  "limit": z.number().int().gte(1).lte(50).describe("The maximum number of items to be returned in result set.").optional(),
  "page": z.number().int().gte(1).describe("Current page of the collection.").optional(),
  "sort": z.enum(["dateAsc","dateDesc"]).describe("Sort results by date. ").optional()
}