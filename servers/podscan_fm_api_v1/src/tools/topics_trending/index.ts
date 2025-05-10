export { inputParams } from "./schema/root.js"

export const toolName = `topics_trending`
export const toolDescription = `Get trending topics`
export const baseUrl = `https://podscan.fm/api/v1`
export const path = `/topics/trending`
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
    "timeframe",
    "with_history"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}