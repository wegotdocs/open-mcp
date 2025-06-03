import { z } from "zod"

export const inputParamsSchema = {
  "businessId": z.string(),
  "search": z.string().optional(),
  "length": z.number().int().optional(),
  "start": z.number().int().optional(),
  "readAll": z.boolean(),
  "orderColumn": z.number().int(),
  "order_dir": z.number().int()
}