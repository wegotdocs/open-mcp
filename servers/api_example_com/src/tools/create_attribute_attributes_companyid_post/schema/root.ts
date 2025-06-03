import { z } from "zod"

export const inputParamsSchema = {
  "companyId": z.string(),
  "customId": z.string().optional(),
  "source": z.enum(["erp","api","embat"]).describe("An enumeration."),
  "active": z.boolean().optional(),
  "name": z.string(),
  "type": z.enum(["list","string","number"]).describe("An enumeration."),
  "required": z.boolean().optional(),
  "values": z.array(z.object({ "customId": z.string(), "name": z.string() })).optional()
}