import { z } from "zod"

export const toolName = `call_start_call_start_post`
export const toolDescription = `Call Start`
export const baseUrl = `https://api.example.com`
export const path = `/call/start`
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
    "start"
  ]
}
export const flatMap = {}

export const inputParams = {
  "start": z.object({ "project_id": z.string(), "id": z.union([z.string(), z.null()]).optional(), "op_name": z.string(), "display_name": z.union([z.string(), z.null()]).optional(), "trace_id": z.union([z.string(), z.null()]).optional(), "parent_id": z.union([z.string(), z.null()]).optional(), "started_at": z.string().datetime({ offset: true }), "attributes": z.record(z.any()), "inputs": z.record(z.any()), "wb_user_id": z.union([z.string(), z.null()]).describe("Do not set directly. Server will automatically populate this field.").optional(), "wb_run_id": z.union([z.string(), z.null()]).optional() })
}