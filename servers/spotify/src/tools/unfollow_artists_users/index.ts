export { inputParams } from "./schema/root.js"

export const toolName = `unfollow_artists_users`
export const toolDescription = `Unfollow Artists or Users`
export const baseUrl = `https://api.spotify.com/v1`
export const path = `/me/following`
export const method = `delete`
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
    "type",
    "ids"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "b_ids"
  ]
}
export const flatMap = {
  "b_ids": "ids"
}