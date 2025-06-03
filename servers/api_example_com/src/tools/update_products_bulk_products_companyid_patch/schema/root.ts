import { z } from "zod"

export const inputParamsSchema = {
  "companyId": z.string(),
  "data": z.array(z.object({ "additionalInfo": z.record(z.any()), "accountingCode": z.string().optional(), "id": z.string().describe("Embat product ID") }))
}