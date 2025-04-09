export { inputParams } from "./schema/root.js"

export const toolName = `get_users_top_tracks`
export const toolDescription = `Get User's Top Tracks`
export const baseUrl = `https://api.spotify.com/v1`
export const path = `/me/top/tracks`
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
    "time_range",
    "limit",
    "offset"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}