import { z } from "zod"

export const inputParamsSchema = {
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional(),
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "with_projects": z.boolean().describe("Whether the project_id of listed apps should be fetched and included.").optional()
}