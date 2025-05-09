import { z } from "zod"

export const inputParamsSchema = {
  "app_name": z.union([z.string(), z.null()]).optional()
}