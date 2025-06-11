import { z } from "zod"

export const inputParamsSchema = {
  "cursor": z.string().describe("Cursor name").optional(),
  "pageSize": z.number().int().describe("Limit number of records per page").optional(),
  "includeDeletedDevices": z.boolean().describe("Whether or not include deleted devices").optional()
}