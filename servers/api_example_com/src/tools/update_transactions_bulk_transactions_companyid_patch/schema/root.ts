import { z } from "zod"

export const inputParamsSchema = {
  "companyId": z.string(),
  "data": z.array(z.object({ "additionalInfo": z.record(z.any()), "attributes": z.array(z.object({ "customId": z.string(), "value": z.string(), "valueCustomId": z.string().optional() })).optional(), "sync": z.boolean().optional(), "id": z.string().describe("Embat transaction ID") }))
}