export { inputParams } from "./schema/root.js"

export const toolName = `create_playlist`
export const toolDescription = `Create Playlist`
export const baseUrl = `https://api.spotify.com/v1`
export const path = `/users/{user_id}/playlists`
export const method = `post`
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
  "query": [],
  "header": [],
  "path": [
    "user_id"
  ],
  "cookie": [],
  "body": [
    "name",
    "public",
    "collaborative",
    "description"
  ]
}
export const flatMap = {}