export { inputParams } from "./schema/root.js"

export const toolName = `get_an_artists_albums`
export const toolDescription = `Get Artist's Albums`
export const baseUrl = `https://api.spotify.com/v1`
export const path = `/artists/{id}/albums`
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
    "include_groups",
    "market",
    "limit",
    "offset"
  ],
  "header": [],
  "path": [
    "id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}