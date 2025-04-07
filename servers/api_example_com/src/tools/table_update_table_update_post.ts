import { z } from "zod"

export const toolName = `table_update_table_update_post`
export const toolDescription = `Table Update`
export const baseUrl = `https://api.example.com`
export const path = `/table/update`
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
    "base_digest",
    "updates"
  ]
}
export const flatMap = {}

export const inputParams = {
  "project_id": z.string(),
  "base_digest": z.string(),
  "updates": z.array(z.union([z.object({ "append": z.object({ "row": z.record(z.any()) }) }), z.object({ "pop": z.object({ "index": z.number().int() }) }), z.object({ "insert": z.object({ "index": z.number().int(), "row": z.record(z.any()) }) })]))
}