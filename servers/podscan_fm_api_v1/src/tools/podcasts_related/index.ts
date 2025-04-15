export { inputParams } from "./schema/root.js"

export const toolName = `podcasts_related`
export const toolDescription = `List related podcasts`
export const baseUrl = `https://podscan.fm/api/v1`
export const path = `/podcasts/{podcast}/related_podcasts`
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
    "podcast"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}