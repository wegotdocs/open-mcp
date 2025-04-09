export { inputParams } from "./schema/root.js"

export const toolName = `get_users_saved_audiobooks`
export const toolDescription = `Get User's Saved Audiobooks`
export const baseUrl = `https://api.spotify.com/v1`
export const path = `/me/audiobooks`
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