import { z } from "zod"

export const inputParamsSchema = {
  "name": z.union([z.string(), z.null()]).optional(),
  "password": z.string().min(10).optional()
}