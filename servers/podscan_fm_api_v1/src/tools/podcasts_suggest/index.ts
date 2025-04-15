export { inputParams } from "./schema/root.js"

export const toolName = `podcasts_suggest`
export const toolDescription = `Suggest a podcast`
export const baseUrl = `https://podscan.fm/api/v1`
export const path = `/podcasts/suggest`
export const method = `post`
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
  "body": [
    "url"
  ]
}
export const flatMap = {}