import { z } from "zod"

export const inputParamsSchema = {
  "location": z.array(z.string()).describe("Location id").optional(),
  "start": z.string().datetime({ offset: true }).describe("Start time").optional(),
  "end": z.string().datetime({ offset: true }).describe("End time").optional(),
  "office": z.array(z.string().regex(new RegExp("^[A-Z]{4}$"))).describe("Issuing office").optional(),
  "wmoid": z.array(z.string().regex(new RegExp("^[A-Z]{4}\\d{2}$"))).describe("WMO id code").optional(),
  "type": z.array(z.string().regex(new RegExp("^\\w{3}$"))).describe("Product code").optional(),
  "limit": z.number().int().gte(1).lte(500).describe("Limit").optional()
}