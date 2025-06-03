import { z } from "zod"

export const inputParamsSchema = {
  "globalId": z.string(),
  "businessId": z.string(),
  "type": z.string().optional()
}