import { z } from "zod"

export const toolName = `table_query_stats_table_query_stats_post`
export const toolDescription = `Table Query Stats`
export const baseUrl = `https://api.example.com`
export const path = `/table/query_stats`
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
    "digest"
  ]
}
export const flatMap = {}

export const inputParams = {
  "project_id": z.string().describe("The ID of the project"),
  "digest": z.string().describe("The digest of the table to query")
}