import { z } from "zod"

export const inputParamsSchema = {
  "df": z.string().describe("Device filter").optional(),
  "pageSize": z.number().int().describe("Limit number of devices to return").optional(),
  "after": z.number().int().describe("Last Node ID from previous page").optional()
}