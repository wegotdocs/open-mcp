import { z } from "zod"

export const inputParamsSchema = {
  "df": z.string().describe("Device filter").optional(),
  "cursor": z.string().describe("Cursor name").optional(),
  "pageSize": z.number().int().describe("Limit number of devices to return").optional()
}