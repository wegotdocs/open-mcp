import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().optional(),
  "description": z.string().optional(),
  "credits": z.number().int().optional()
}