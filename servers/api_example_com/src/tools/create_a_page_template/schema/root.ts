import { z } from "zod"

export const inputParamsSchema = {
  "title": z.string().min(1).max(512),
  "content": z.string().max(1048576),
  "order": z.number().int().optional(),
  "category": z.string().min(1).max(128)
}