import { z } from "zod"

export const toolName = `calls_delete_calls_delete_post`
export const toolDescription = `Calls Delete`
export const baseUrl = `https://api.example.com`
export const path = `/calls/delete`
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
    "call_ids",
    "wb_user_id"
  ]
}
export const flatMap = {}

export const inputParams = {
  "project_id": z.string(),
  "call_ids": z.array(z.string()),
  "wb_user_id": z.union([z.string(), z.null()]).describe("Do not set directly. Server will automatically populate this field.").optional()
}