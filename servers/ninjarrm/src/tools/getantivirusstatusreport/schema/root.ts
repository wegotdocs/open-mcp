import { z } from "zod"

export const inputParamsSchema = {
  "df": z.string().describe("Device filter").optional(),
  "ts": z.string().describe("Monitoring timestamp filter").optional(),
  "productState": z.string().describe("Product State filter").optional(),
  "productName": z.string().describe("Product Name filter").optional(),
  "cursor": z.string().describe("Cursor name").optional(),
  "pageSize": z.number().int().describe("Limit number of records per page").optional()
}