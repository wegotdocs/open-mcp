import { z } from "zod"

export const inputParamsSchema = {
  "companyId": z.string(),
  "data": z.array(z.object({ "active": z.boolean().optional(), "type": z.enum(["banks","analytics","accountings"]).describe("An enumeration.").optional(), "accountingName": z.string().optional(), "collective": z.boolean().describe("collective accounting account").optional(), "additionalInfo": z.record(z.any()).optional(), "attributes": z.array(z.object({ "customId": z.string().optional(), "value": z.string().optional(), "valueCustomId": z.string().optional() })).optional(), "accountingCode": z.string() }))
}