export { inputParams } from "./schema/root.js"

export const toolName = `verify_permissions`
export const toolDescription = `Verify Permissions`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/permissions/verify`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
    "in": "header",
    "envVarName": "AUTHORIZATION",
    "schemeType": "apiKey",
    "schemeName": "Authorization"
  }
]
export const keys = {
  "query": [
    "action",
    "scope_type",
    "scope_id",
    "resource_type",
    "resource_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}