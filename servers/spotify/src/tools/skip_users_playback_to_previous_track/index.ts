export { inputParams } from "./schema/root.js"

export const toolName = `skip_users_playback_to_previous_track`
export const toolDescription = `Skip To Previous`
export const baseUrl = `https://api.spotify.com/v1`
export const path = `/me/player/previous`
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
  "query": [
    "device_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}