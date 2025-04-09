export { inputParams } from "./schema/root.js"

export const toolName = `get_current_users_profile`
export const toolDescription = `Get Current User's Profile`
export const baseUrl = `https://api.spotify.com/v1`
export const path = `/me`
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
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}