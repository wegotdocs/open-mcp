import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().min(1).max(64),
  "permissions": z.array(z.string().min(1).max(32)).optional()
}