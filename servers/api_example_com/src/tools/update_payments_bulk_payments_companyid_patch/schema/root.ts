import { z } from "zod"

export const inputParamsSchema = {
  "companyId": z.string(),
  "data": z.array(z.object({ "sync": z.boolean().optional(), "additionalInfo": z.record(z.any()).optional(), "error": z.string().optional(), "registered": z.boolean().optional(), "customId": z.string().describe("Embat custom/auto unique payment ID. You can use as your custom ERP payment id") }))
}