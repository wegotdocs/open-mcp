import { z } from "zod"

export const inputParamsSchema = {
  "trialPeriodType": z.string().optional(),
  "quantity": z.number().optional()
}