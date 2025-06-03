import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string(),
  "folder_id": z.string().describe("folder id").optional(),
  "search": z.string().describe("Search term to filter documents by name").optional(),
  "page": z.number().int().gte(0).describe("Zero-based page index (0..N)").optional(),
  "size": z.number().int().gte(1).describe("The size of the page to be returned").optional(),
  "sort": z.array(z.string()).describe("Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.").optional()
}