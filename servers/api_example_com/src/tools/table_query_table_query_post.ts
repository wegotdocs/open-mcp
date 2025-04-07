import { z } from "zod"

export const toolName = `table_query_table_query_post`
export const toolDescription = `Table Query`
export const baseUrl = `https://api.example.com`
export const path = `/table/query`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
    "in": "header",
    "envVarName": "USERNAME_PASSWORD_BASE64",
    "schemeType": "http",
    "schemeScheme": "basic"
  }
]
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "project_id",
    "digest",
    "filter",
    "limit",
    "offset",
    "sort_by"
  ]
}
export const flatMap = {}

export const inputParams = {
  "project_id": z.string().describe("The ID of the project"),
  "digest": z.string().describe("The digest of the table to query"),
  "filter": z.union([z.object({ "row_digests": z.union([z.array(z.string()), z.null()]).describe("List of row digests to filter by").optional() }), z.null()]).describe("Optional filter to apply to the query. See `TableRowFilter` for more details.").optional(),
  "limit": z.union([z.number().int(), z.null()]).describe("Maximum number of rows to return").optional(),
  "offset": z.union([z.number().int(), z.null()]).describe("Number of rows to skip before starting to return rows").optional(),
  "sort_by": z.union([z.array(z.object({ "field": z.string(), "direction": z.enum(["asc","desc"]) })), z.null()]).describe("List of fields to sort by. Fields can be dot-separated to access dictionary values. No sorting uses the default table order (insertion order).").optional()
}