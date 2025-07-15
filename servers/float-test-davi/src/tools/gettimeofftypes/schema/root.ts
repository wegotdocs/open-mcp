import { z } from "zod"

export const inputParamsSchema = {
  "active": z.number().int().describe("Filter only on `0` = non-active or `1` = active entities in the response").optional(),
  "page": z.number().int().gte(1).describe("The page number of the page of results to return, default `1`").optional(),
  "per-page": z.number().int().gte(1).lte(200).describe("The number of items per page, default is `50`").optional()
}