import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().optional(),
  "title": z.string().optional(),
  "price": z.number().optional(),
  "description": z.string().optional(),
  "category": z.string().optional(),
  "image": z.string().url().optional()
}