import { z } from "zod"

export const inputParamsSchema = {
  "df": z.string().describe("Device filter").optional(),
  "ts": z.string().describe("Monitoring timestamp filter").optional(),
  "status": z.string().describe("Patch Status filter").optional(),
  "productIdentifier": z.string().describe("Product Identifier").optional(),
  "type": z.string().describe("Patch Type filter").optional(),
  "impact": z.string().describe("Patch Impact filter").optional(),
  "cursor": z.string().describe("Cursor name").optional(),
  "pageSize": z.number().int().describe("Limit number of records per page").optional()
}