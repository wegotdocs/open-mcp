import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().optional(),
  "phone": z.string().optional(),
  "email": z.string().optional()
}