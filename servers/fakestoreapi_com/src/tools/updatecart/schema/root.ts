import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int(),
  "b_id": z.number().int().optional(),
  "userId": z.number().int().optional(),
  "products": z.array(z.object({ "id": z.number().int().optional(), "title": z.string().optional(), "price": z.number().optional(), "description": z.string().optional(), "category": z.string().optional(), "image": z.string().url().optional() })).optional()
}