import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string(),
  "period": z.string(),
  "value": z.enum(["OPENED_PERIOD","CLOSED_PERIOD"])
}