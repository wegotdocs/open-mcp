import { z } from "zod"

export const inputParams = {
  "role-id": z.string(),
  "first": z.number().int().optional(),
  "max": z.number().int().optional(),
  "search": z.string().optional()
}