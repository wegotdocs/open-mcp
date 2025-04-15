import { z } from "zod"

export const inputParamsSchema = {
  "briefRepresentation": z.boolean().optional(),
  "first": z.number().int().optional(),
  "max": z.number().int().optional(),
  "search": z.string().optional()
}