import { z } from "zod"

export const inputParamsSchema = {
  "businessId": z.string(),
  "only_promotions": z.boolean().optional(),
  "ids": z.array(z.string())
}