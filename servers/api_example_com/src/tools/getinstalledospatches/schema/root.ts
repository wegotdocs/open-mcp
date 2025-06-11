import { z } from "zod"

export const inputParamsSchema = {
  "df": z.string().describe("Device filter").optional(),
  "status": z.string().describe("Patch Status filter (FAILED, INSTALLED)").optional(),
  "installedBefore": z.string().describe("Include patches installed before specified date").optional(),
  "installedAfter": z.string().describe("Include patches installed after specified date").optional(),
  "cursor": z.string().describe("Cursor name").optional(),
  "pageSize": z.number().int().describe("Limit number of records per page").optional()
}