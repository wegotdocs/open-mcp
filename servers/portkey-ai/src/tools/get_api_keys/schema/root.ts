import { z } from "zod"

export const inputParamsSchema = {
  "page_size": z.number().int().optional(),
  "current_page": z.number().int().optional(),
  "workspace_id": z.string().optional()
}