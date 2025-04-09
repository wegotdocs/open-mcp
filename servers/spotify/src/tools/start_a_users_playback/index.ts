export { inputParams } from "./schema/root.js"

export const toolName = `start_a_users_playback`
export const toolDescription = `Start/Resume Playback`
export const baseUrl = `https://api.spotify.com/v1`
export const path = `/me/player/play`
export const method = `put`
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
  "body": [
    "context_uri",
    "uris",
    "offset",
    "position_ms"
  ]
}
export const flatMap = {}