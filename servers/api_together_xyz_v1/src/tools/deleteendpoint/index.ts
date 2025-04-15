export { inputParams } from "./schema/root.js"

export const toolName = `deleteendpoint`
export const toolDescription = `Delete endpoint`
export const baseUrl = `https://api.together.xyz/v1`
export const path = `/endpoints/{endpointId}`
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
  "path": [
    "endpointId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}