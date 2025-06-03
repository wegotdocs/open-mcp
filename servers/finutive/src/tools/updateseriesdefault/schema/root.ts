import { z } from "zod"

export const inputParamsSchema = {
  "businessId": z.string(),
  "serieId": z.string(),
  "is_default": z.number().int().optional()
}