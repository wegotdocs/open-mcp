export { inputParams } from "./schema/root.js"

export const toolName = `check_current_user_follows`
export const toolDescription = `Check If User Follows Artists or Users`
export const baseUrl = `https://api.spotify.com/v1`
export const path = `/me/following/contains`
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
    "type",
    "ids"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}