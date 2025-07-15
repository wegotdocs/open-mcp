import { z } from "zod"

export const inputParamsSchema = {
  "base_price": z.string().optional(),
  "description": z.string().optional(),
  "name": z.string().optional(),
  "product_custom_fields": z.array(z.object({ "custom_field_id": z.string().optional(), "value": z.string().optional() })).optional()
}