import { z } from "zod"

export const inputParamsSchema = {
  "companyId": z.string(),
  "data": z.array(z.object({ "additionalInfo": z.record(z.any()), "sync": z.boolean().optional(), "id": z.string().describe("Embat forecast ID") }))
}