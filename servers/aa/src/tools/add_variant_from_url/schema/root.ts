import { z } from "zod"

export const inputParamsSchema = {
  "app_id": z.string(),
  "variant_name": z.string(),
  "url": z.string(),
  "commit_message": z.union([z.string(), z.null()]).optional(),
  "base_name": z.union([z.string(), z.null()]).optional(),
  "config_name": z.union([z.string(), z.null()]).optional()
}