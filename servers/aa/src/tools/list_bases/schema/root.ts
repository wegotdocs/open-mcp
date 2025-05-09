import { z } from "zod"

export const inputParamsSchema = {
  "app_id": z.string(),
  "base_name": z.union([z.string(), z.null()]).optional()
}