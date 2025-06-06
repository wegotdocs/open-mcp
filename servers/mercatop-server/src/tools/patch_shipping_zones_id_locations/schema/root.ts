import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("Unique ID for the resource."),
  "code": z.string().describe("Shipping zone location code.").optional(),
  "type": z.enum(["postcode","state","country","continent"]).describe("Shipping zone location type.").optional()
}