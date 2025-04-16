import { z } from "zod"

export const inputParamsSchema = {
  "version": z.number().int().optional(),
  "real": z.number().int().optional(),
  "isRepack": z.boolean().optional()
}