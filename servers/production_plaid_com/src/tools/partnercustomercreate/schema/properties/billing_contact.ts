import { z } from "zod"

export const inputParamsSchema = {
  "given_name": z.string().optional(),
  "family_name": z.string().optional(),
  "email": z.string().optional()
}