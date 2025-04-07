import { z } from "zod"

export const toolName = `call_read_call_read_post`
export const toolDescription = `Call Read`
export const baseUrl = `https://api.example.com`
export const path = `/call/read`
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
    "id",
    "include_costs",
    "include_storage_size",
    "include_total_storage_size"
  ]
}
export const flatMap = {}

export const inputParams = {
  "project_id": z.string(),
  "id": z.string(),
  "include_costs": z.union([z.boolean(), z.null()]).optional(),
  "include_storage_size": z.union([z.boolean(), z.null()]).optional(),
  "include_total_storage_size": z.union([z.boolean(), z.null()]).optional()
}