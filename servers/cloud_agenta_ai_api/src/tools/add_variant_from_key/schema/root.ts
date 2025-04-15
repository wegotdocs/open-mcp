import { z } from "zod"

export const inputParams = {
  "app_id": z.string(),
  "variant_name": z.string(),
  "key": z.string(),
  "commit_message": z.union([z.string(), z.null()]).optional(),
  "base_name": z.union([z.string(), z.null()]).optional(),
  "config_name": z.union([z.string(), z.null()]).optional()
}