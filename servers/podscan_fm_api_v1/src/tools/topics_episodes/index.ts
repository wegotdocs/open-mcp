export { inputParams } from "./schema/root.js"

export const toolName = `topics_episodes`
export const toolDescription = `Get latest episodes for a topic`
export const baseUrl = `https://podscan.fm/api/v1`
export const path = `/topics/{topicId}/episodes`
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
    "topicId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}