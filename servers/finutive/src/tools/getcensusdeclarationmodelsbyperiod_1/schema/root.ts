import { z } from "zod"

export const inputParamsSchema = {
  "businessId": z.string(),
  "period": z.enum(["QUARTERLY","ANNUAL"]),
  "period_name": z.string(),
  "exclude_asociated_models": z.boolean().optional()
}