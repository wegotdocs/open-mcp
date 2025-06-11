import { z } from "zod"

export const inputParamsSchema = {
  "cursor": z.string().describe("Cursor name").optional(),
  "pageSize": z.number().int().gte(10).lte(10000).describe("Limit number of records per page").optional(),
  "updatedAfter": z.string().describe("Custom fields updated after specified date").optional(),
  "fields": z.string().describe("Comma-separated list of fields").optional(),
  "scopes": z.string().describe("Comma-separated list of scopes").optional(),
  "showSecureValues": z.boolean().describe("Flag to indicate if secure values should be returned as plain text without encryption").optional()
}