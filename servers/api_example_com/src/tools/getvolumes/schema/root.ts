import { z } from "zod"

export const inputParamsSchema = {
  "df": z.string().describe("Device filter").optional(),
  "ts": z.string().describe("Monitoring timestamp filter").optional(),
  "cursor": z.string().describe("Cursor name").optional(),
  "pageSize": z.number().int().describe("Limit number of records per page").optional(),
  "include": z.string().describe("Additional information to include (bl - BitLocker status)").optional()
}