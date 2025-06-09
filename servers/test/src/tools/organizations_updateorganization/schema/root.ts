import { z } from "zod"

export const inputParamsSchema = {
  "language": z.string(),
  "id": z.number().int(),
  "name": z.string(),
  "brand_name": z.string(),
  "address": z.string(),
  "telephone": z.string(),
  "email": z.string().email(),
  "start_date": z.string(),
  "type": z.number().int().optional(),
  "vat": z.number().optional(),
  "profit": z.number().optional(),
  "income": z.number().optional()
}