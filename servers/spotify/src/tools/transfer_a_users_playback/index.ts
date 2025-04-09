export { inputParams } from "./schema/root.js"

export const toolName = `transfer_a_users_playback`
export const toolDescription = `Transfer Playback`
export const baseUrl = `https://api.spotify.com/v1`
export const path = `/me/player`
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
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "device_ids",
    "play"
  ]
}
export const flatMap = {}