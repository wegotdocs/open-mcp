export { inputParams } from "./schema/root.js"

export const toolName = `topics_show`
export const toolDescription = `Get topic details`
export const baseUrl = `https://podscan.fm/api/v1`
export const path = `/topics/{topic}`
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
    "with_history"
  ],
  "header": [],
  "path": [
    "topic"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}