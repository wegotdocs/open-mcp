export { inputParams } from "./schema/root.js"

export const toolName = `entities_similar`
export const toolDescription = `Get similar entities`
export const baseUrl = `https://podscan.fm/api/v1`
export const path = `/entities/{entityId}/similar`
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
  "query": [],
  "header": [],
  "path": [
    "entityId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}