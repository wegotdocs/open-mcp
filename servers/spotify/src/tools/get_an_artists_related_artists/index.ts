export { inputParams } from "./schema/root.js"

export const toolName = `get_an_artists_related_artists`
export const toolDescription = `Get Artist's Related Artists`
export const baseUrl = `https://api.spotify.com/v1`
export const path = `/artists/{id}/related-artists`
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
  "query": [],
  "header": [],
  "path": [
    "id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}