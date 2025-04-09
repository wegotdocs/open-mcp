export { inputParams } from "./schema/root.js"

export const toolName = `add_to_queue`
export const toolDescription = `Add Item to Playback Queue`
export const baseUrl = `https://api.spotify.com/v1`
export const path = `/me/player/queue`
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
    "uri",
    "device_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}