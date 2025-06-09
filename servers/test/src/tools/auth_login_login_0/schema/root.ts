import { z } from "zod"

export const inputParamsSchema = {
  "email": z.string(),
  "password": z.string(),
  "remember": z.boolean().optional()
}