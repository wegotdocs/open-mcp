import { z } from "zod"

export const inputParamsSchema = {
  "companyId": z.string(),
  "data": z.array(z.object({ "customId": z.string().optional(), "source": z.enum(["erp","api","embat"]).describe("An enumeration."), "active": z.boolean(), "name": z.string(), "type": z.enum(["list","string","number"]).describe("An enumeration."), "required": z.boolean(), "values": z.array(z.object({ "customId": z.string(), "name": z.string() })).optional() }))
}