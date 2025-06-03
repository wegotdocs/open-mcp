import { z } from "zod"

export const inputParamsSchema = {
  "companyId": z.string(),
  "data": z.array(z.object({ "name": z.string().optional(), "active": z.boolean(), "values": z.array(z.object({ "customId": z.string(), "name": z.string() })).optional(), "customId": z.string().describe("Embat custom/auto unique attribute ID. You can use as your custom ERP attribute id") }))
}