import { z } from "zod"

export const inputParamsSchema = {
  "app_id": z.string().describe("The app ID"),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional(),
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional()
}