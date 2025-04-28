import { z } from "zod"

export const inputParamsSchema = {
  "dst_tag_id": z.number().int(),
  "session_id": z.string().optional(),
  "name": z.string(),
  "display_name": z.union([z.string(), z.null()]).optional(),
  "description": z.union([z.string(), z.null()]).optional()
}