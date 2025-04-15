import { z } from "zod"

export const inputParamsSchema = {
  "collection_id": z.string().optional(),
  "workspace_id": z.string().optional(),
  "current_page": z.number().int().optional(),
  "page_size": z.number().int().optional(),
  "search": z.string().optional()
}