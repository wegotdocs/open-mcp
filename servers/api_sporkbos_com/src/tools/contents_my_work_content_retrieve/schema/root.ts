import { z } from "zod"

export const inputParamsSchema = {
  "board": z.number().int().optional(),
  "content": z.number().int(),
  "name": z.string().optional(),
  "show_completed": z.boolean().optional()
}