export { inputParams } from "./schema/root.js"

export const toolName = `seek_to_position_in_currently_playing_track`
export const toolDescription = `Seek To Position`
export const baseUrl = `https://api.spotify.com/v1`
export const path = `/me/player/seek`
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
    "position_ms",
    "device_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}