export { inputParams } from "./schema/root.js"

export const toolName = `topics_search`
export const toolDescription = `Search topics`
export const baseUrl = `https://podscan.fm/api/v1`
export const path = `/topics/search`
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
    "query",
    "per_page"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}