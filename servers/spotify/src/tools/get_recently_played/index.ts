export { inputParams } from "./schema/root.js"

export const toolName = `get_recently_played`
export const toolDescription = `Get Recently Played Tracks`
export const baseUrl = `https://api.spotify.com/v1`
export const path = `/me/player/recently-played`
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
    "limit",
    "after",
    "before"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}