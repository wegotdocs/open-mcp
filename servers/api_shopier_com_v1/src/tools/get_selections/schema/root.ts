import { z } from "zod"

export const inputParams = {
  "variationId": z.array(z.string()).describe("Filter by product variations by specifying variation ID(s).").optional(),
  "limit": z.number().int().gte(1).lte(50).describe("The maximum number of items to be returned in result set.").optional(),
  "page": z.number().int().gte(1).describe("Current page of the collection.").optional()
}