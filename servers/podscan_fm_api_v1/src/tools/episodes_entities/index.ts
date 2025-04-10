export { inputParams } from "./schema/root.js"

export const toolName = `episodes_entities`
export const toolDescription = `Get episode entities`
export const baseUrl = `https://podscan.fm/api/v1`
export const path = `/episodes/{episodeId}/entities`
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
    "role"
  ],
  "header": [],
  "path": [
    "episodeId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}