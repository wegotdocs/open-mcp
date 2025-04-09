import { z } from "zod"

export const inputParams = {
  "pa_id": z.string().describe("A unique identifier for a partner attachment."),
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional()
}