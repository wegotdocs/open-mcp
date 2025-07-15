import { z } from "zod"

export const inputParamsSchema = {
  "expand": z.string().describe("Use `people_id` to return an additional `people_id` field that can reference a record on `/people`, or `null` if a guest").optional(),
  "page": z.number().int().gte(1).describe("The page number of the page of results to return, default `1`").optional(),
  "per-page": z.number().int().gte(1).lte(200).describe("The number of items per page, default is `50`").optional()
}