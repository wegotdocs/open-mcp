export { inputParams } from "./schema/root.js"

export const toolName = `episodes_reanalyzeepisode`
export const toolDescription = `Request reanalysis`
export const baseUrl = `https://podscan.fm/api/v1`
export const path = `/episodes/{episode}/reanalyze`
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
  "path": [
    "episode"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}