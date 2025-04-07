import { z } from "zod"

export const toolName = `call_start_batch_call_upsert_batch_post`
export const toolDescription = `Call Start Batch`
export const baseUrl = `https://api.example.com`
export const path = `/call/upsert_batch`
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
    "batch"
  ]
}
export const flatMap = {}

export const inputParams = {
  "batch": z.array(z.union([z.object({ "mode": z.string(), "req": z.object({ "start": z.object({ "project_id": z.string(), "id": z.union([z.string(), z.null()]).optional(), "op_name": z.string(), "display_name": z.union([z.string(), z.null()]).optional(), "trace_id": z.union([z.string(), z.null()]).optional(), "parent_id": z.union([z.string(), z.null()]).optional(), "started_at": z.string().datetime({ offset: true }), "attributes": z.record(z.any()), "inputs": z.record(z.any()), "wb_user_id": z.union([z.string(), z.null()]).describe("Do not set directly. Server will automatically populate this field.").optional(), "wb_run_id": z.union([z.string(), z.null()]).optional() }) }) }), z.object({ "mode": z.string(), "req": z.object({ "end": z.object({ "project_id": z.string(), "id": z.string(), "ended_at": z.string().datetime({ offset: true }), "exception": z.union([z.string(), z.null()]).optional(), "output": z.union([z.any(), z.null()]).optional(), "summary": z.object({ "usage": z.record(z.object({ "prompt_tokens": z.union([z.number().int(), z.null()]).optional(), "input_tokens": z.union([z.number().int(), z.null()]).optional(), "completion_tokens": z.union([z.number().int(), z.null()]).optional(), "output_tokens": z.union([z.number().int(), z.null()]).optional(), "requests": z.union([z.number().int(), z.null()]).optional(), "total_tokens": z.union([z.number().int(), z.null()]).optional() })).optional() }).catchall(z.any()) }) }) })]))
}