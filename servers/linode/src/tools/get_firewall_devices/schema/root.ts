import { z } from "zod"

export const inputParams = {
  "page": z.number().int().gte(1).describe("The page of a collection to return.").optional(),
  "page_size": z.number().int().gte(25).lte(500).describe("The number of items to return per page.").optional()
}