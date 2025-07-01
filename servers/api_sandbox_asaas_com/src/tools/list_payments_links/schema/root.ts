import { z } from "zod"

export const inputParamsSchema = {
  "offset": z.number().int().describe("List starting element").optional(),
  "limit": z.number().int().lte(100).describe("Number of list elements (max: 100)").optional(),
  "active": z.boolean().describe("Filter by activated or deactivated payment link").optional(),
  "includeDeleted": z.boolean().describe("True to also retrieve removed payment links").optional(),
  "name": z.string().describe("Filter by payments link name").optional(),
  "externalReference": z.string().describe("Filter by your system identifier").optional()
}