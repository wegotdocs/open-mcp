import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("Device identifier"),
  "type": z.string().describe("Patch Type filter").optional(),
  "impact": z.string().describe("Patch Impact filter").optional(),
  "status": z.string().describe("Patch Status filter").optional(),
  "productIdentifier": z.string().describe("Product Identifier").optional(),
  "installedBefore": z.string().describe("Include patches installed before specified date").optional(),
  "installedAfter": z.string().describe("Include patches installed after specified date").optional()
}