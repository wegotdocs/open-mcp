export { inputParams } from "./schema/root.js"

export const toolName = `get_information_about_the_users_current_playback`
export const toolDescription = `Get Playback State`
export const baseUrl = `https://api.spotify.com/v1`
export const path = `/me/player`
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
    "market",
    "additional_types"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}