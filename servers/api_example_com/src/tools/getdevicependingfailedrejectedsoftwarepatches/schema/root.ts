import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("Device identifier"),
  "status": z.string().describe("Patch Status filter").optional(),
  "productIdentifier": z.string().describe("Product Identifier").optional(),
  "type": z.string().describe("Patch Type filter").optional(),
  "impact": z.string().describe("Patch Impact filter").optional()
}