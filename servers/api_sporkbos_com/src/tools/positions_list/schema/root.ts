import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().optional(),
  "position_level": z.number().int().optional(),
  "status": z.string().optional(),
  "team": z.number().int().optional()
}