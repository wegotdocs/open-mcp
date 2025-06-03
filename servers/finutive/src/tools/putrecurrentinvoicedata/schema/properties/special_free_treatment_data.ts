import { z } from "zod"

export const inputParamsSchema = {
  "price": z.number().optional(),
  "vat": z.number().optional(),
  "active_from": z.string().optional(),
  "active_to": z.string().optional()
}