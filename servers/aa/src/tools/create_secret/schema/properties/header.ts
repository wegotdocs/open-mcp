import { z } from "zod"

export const inputParamsSchema = {
  "name": z.union([z.string(), z.null()]).optional(),
  "description": z.union([z.string(), z.null()]).optional()
}