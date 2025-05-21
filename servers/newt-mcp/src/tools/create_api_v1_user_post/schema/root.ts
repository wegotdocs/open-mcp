import { z } from "zod"

export const inputParamsSchema = {
  "enabled": z.boolean().optional(),
  "name": z.union([z.string(), z.null()]).optional(),
  "password": z.union([z.string().min(10), z.null()]).optional(),
  "username": z.string()
}