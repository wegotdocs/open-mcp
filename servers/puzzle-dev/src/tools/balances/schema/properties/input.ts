import { z } from "zod"

export const inputParams = {
  "companyId": z.string(),
  "accountId": z.string().optional(),
  "dates": z.array(z.string())
}