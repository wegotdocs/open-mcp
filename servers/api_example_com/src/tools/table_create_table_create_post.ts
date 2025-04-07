import { z } from "zod"

export const toolName = `table_create_table_create_post`
export const toolDescription = `Table Create`
export const baseUrl = `https://api.example.com`
export const path = `/table/create`
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
    "table"
  ]
}
export const flatMap = {}

export const inputParams = {
  "table": z.object({ "project_id": z.string(), "rows": z.array(z.record(z.any())) })
}