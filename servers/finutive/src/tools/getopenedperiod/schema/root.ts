import { z } from "zod"

export const inputParamsSchema = {
  "businessId": z.string(),
  "period_name": z.string()
}