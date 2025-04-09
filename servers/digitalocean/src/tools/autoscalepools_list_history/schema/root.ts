import { z } from "zod"

export const inputParams = {
  "autoscale_pool_id": z.string().describe("A unique identifier for an autoscale pool."),
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional()
}