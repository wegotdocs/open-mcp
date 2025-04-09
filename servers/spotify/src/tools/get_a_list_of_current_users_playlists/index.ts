export { inputParams } from "./schema/root.js"

export const toolName = `get_a_list_of_current_users_playlists`
export const toolDescription = `Get Current User's Playlists`
export const baseUrl = `https://api.spotify.com/v1`
export const path = `/me/playlists`
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
    "offset"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}