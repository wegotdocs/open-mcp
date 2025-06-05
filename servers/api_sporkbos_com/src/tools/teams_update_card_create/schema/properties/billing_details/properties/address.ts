import { z } from "zod"

export const inputParamsSchema = {
  "city": z.string().max(255).optional(),
  "country": z.string().max(2).optional(),
  "line1": z.string().max(255).optional(),
  "line2": z.string().max(255).optional(),
  "postal_code": z.string().max(20).optional(),
  "state": z.string().max(255).optional()
}