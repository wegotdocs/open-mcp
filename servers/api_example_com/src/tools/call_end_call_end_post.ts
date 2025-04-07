import { z } from "zod"

export const toolName = `call_end_call_end_post`
export const toolDescription = `Call End`
export const baseUrl = `https://api.example.com`
export const path = `/call/end`
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
    "end"
  ]
}
export const flatMap = {}

export const inputParams = {
  "end": z.object({ "project_id": z.string(), "id": z.string(), "ended_at": z.string().datetime({ offset: true }), "exception": z.union([z.string(), z.null()]).optional(), "output": z.union([z.any(), z.null()]).optional(), "summary": z.object({ "usage": z.record(z.object({ "prompt_tokens": z.union([z.number().int(), z.null()]).optional(), "input_tokens": z.union([z.number().int(), z.null()]).optional(), "completion_tokens": z.union([z.number().int(), z.null()]).optional(), "output_tokens": z.union([z.number().int(), z.null()]).optional(), "requests": z.union([z.number().int(), z.null()]).optional(), "total_tokens": z.union([z.number().int(), z.null()]).optional() })).optional() }).catchall(z.any()) })
}