export { inputParams } from "./schema/root.js"

export const toolName = `alerts_mentions_index`
export const toolDescription = `List mentions for an alert`
export const baseUrl = `https://podscan.fm/api/v1`
export const path = `/teams/{team}/alerts/{alert}/mentions`
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
    "team",
    "alert"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}