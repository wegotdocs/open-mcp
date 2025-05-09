import { z } from "zod"

export const inputParamsSchema = {
  "base_id": z.string(),
  "config_name": z.union([z.string(), z.null()]).optional(),
  "environment_name": z.union([z.string(), z.null()]).optional()
}