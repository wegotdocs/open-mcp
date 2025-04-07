import { z } from "zod"

export const toolName = `call_update_call_update_post`
export const toolDescription = `Call Update`
export const baseUrl = `https://api.example.com`
export const path = `/call/update`
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
    "call_id",
    "display_name",
    "wb_user_id"
  ]
}
export const flatMap = {}

export const inputParams = {
  "project_id": z.string(),
  "call_id": z.string(),
  "display_name": z.union([z.string(), z.null()]).optional(),
  "wb_user_id": z.union([z.string(), z.null()]).describe("Do not set directly. Server will automatically populate this field.").optional()
}