import { z } from "zod"

export const toolName = `feedback_create_feedback_create_post`
export const toolDescription = `Feedback Create`
export const baseUrl = `https://api.example.com`
export const path = `/feedback/create`
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
    "weave_ref",
    "creator",
    "feedback_type",
    "payload",
    "annotation_ref",
    "runnable_ref",
    "call_ref",
    "trigger_ref",
    "wb_user_id"
  ]
}
export const flatMap = {}

export const inputParams = {
  "project_id": z.string(),
  "weave_ref": z.string(),
  "creator": z.union([z.string(), z.null()]).optional(),
  "feedback_type": z.string(),
  "payload": z.record(z.any()),
  "annotation_ref": z.union([z.string(), z.null()]).optional(),
  "runnable_ref": z.union([z.string(), z.null()]).optional(),
  "call_ref": z.union([z.string(), z.null()]).optional(),
  "trigger_ref": z.union([z.string(), z.null()]).optional(),
  "wb_user_id": z.union([z.string(), z.null()]).describe("Do not set directly. Server will automatically populate this field.").optional()
}