export { inputParams } from "./schema/root.js"

export const toolName = `search`
export const toolDescription = `Search for Item`
export const baseUrl = `https://api.spotify.com/v1`
export const path = `/search`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]
export const keys = {
  "query": [
    "q",
    "type",
    "market",
    "limit",
    "offset",
    "include_external"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}