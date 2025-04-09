import { z } from "zod"

export const inputParams = {
  "organisation_id": z.string().uuid().describe("ID of the organisation").optional(),
  "workspace_id": z.string().describe("ID or slug of the workspace").optional(),
  "search": z.string().describe("Search query to filter labels by name").optional(),
  "current_page": z.number().int().gte(0).describe("Page number for pagination").optional(),
  "page_size": z.number().int().gte(1).describe("Number of items per page").optional()
}