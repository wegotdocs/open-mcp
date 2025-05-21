import { z } from "zod"

export const inputParamsSchema = {
  "username": z.string(),
  "name": z.union([z.string(), z.null()]).optional(),
  "password": z.string().min(10).optional(),
  "enabled": z.union([z.boolean(), z.null()]).optional()
}