import { z } from "zod"

export const inputParamsSchema = {
  "businessId": z.string(),
  "id": z.string().optional(),
  "name": z.string().optional(),
  "price": z.number().optional(),
  "description_text": z.string().optional(),
  "taxes": z.number().optional(),
  "is_product_or_service": z.string().optional()
}