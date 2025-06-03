import { z } from "zod"

export const inputParamsSchema = {
  "businessId": z.string(),
  "statement_id": z.string(),
  "period": z.enum(["MONTHLY","QUARTERLY"])
}