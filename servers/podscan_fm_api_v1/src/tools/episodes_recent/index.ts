export { inputParams } from "./schema/root.js"

export const toolName = `episodes_recent`
export const toolDescription = `Get the most recent episodes`
export const baseUrl = `https://podscan.fm/api/v1`
export const path = `/episodes/recent`
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
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}