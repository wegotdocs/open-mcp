export { inputParams } from "./schema/root.js"

export const toolName = `listhardware`
export const toolDescription = `List available hardware configurations`
export const baseUrl = `https://api.together.xyz/v1`
export const path = `/hardware`
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
    "model"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}