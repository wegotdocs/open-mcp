export { inputParams } from "./schema/root.js"

export const toolName = `listendpoints`
export const toolDescription = `List all endpoints, can be filtered by type`
export const baseUrl = `https://api.together.xyz/v1`
export const path = `/endpoints`
export const method = `get`
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
  "query": [
    "type"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}