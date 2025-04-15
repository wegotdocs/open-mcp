import { z } from "zod"

export const inputParamsSchema = {
  "environment_name": z.string(),
  "variant_id": z.string(),
  "commit_message": z.union([z.string(), z.null()]).optional()
}