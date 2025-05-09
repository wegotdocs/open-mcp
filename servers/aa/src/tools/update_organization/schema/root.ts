import { z } from "zod"

export const inputParamsSchema = {
  "org_id": z.string(),
  "name": z.union([z.string(), z.null()]).optional(),
  "description": z.union([z.string(), z.null()]).optional(),
  "updated_at": z.union([z.string(), z.null()]).optional()
}