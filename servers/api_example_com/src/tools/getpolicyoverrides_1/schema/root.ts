import { z } from "zod"

export const inputParamsSchema = {
  "df": z.string().describe("Device filter").optional(),
  "cursor": z.string().describe("Cursor name").optional(),
  "pageSize": z.number().int().gte(10).lte(10000).describe("Limit number of records per page").optional()
}