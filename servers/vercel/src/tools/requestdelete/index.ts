export { inputParams } from "./schema/root.js"

export const toolName = `requestdelete`
export const toolDescription = `Delete User Account`
export const baseUrl = `https://api.vercel.com`
export const path = `/v1/user`
export const method = `delete`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "reasons"
  ]
}
export const flatMap = {}