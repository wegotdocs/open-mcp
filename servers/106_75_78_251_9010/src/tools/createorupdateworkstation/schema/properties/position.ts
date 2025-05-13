import { z } from "zod"

export const inputParamsSchema = {
  "x": z.number().int().optional(),
  "y": z.number().int().optional(),
  "z": z.number().int().optional()
}