import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().min(1).max(128),
  "description": z.string().max(1048576).optional(),
  "variant": z.string().min(1).max(128).optional()
}