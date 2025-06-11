import { z } from "zod"

export const inputParamsSchema = {
  "df": z.string().describe("Device filter").optional(),
  "cursor": z.string().describe("Cursor name").optional(),
  "pageSize": z.number().int().describe("Limit number of records per page").optional(),
  "installedBefore": z.string().describe("Include software installed before specified date").optional(),
  "installedAfter": z.string().describe("Include software installed after specified date").optional()
}