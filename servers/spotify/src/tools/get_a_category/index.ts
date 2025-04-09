export { inputParams } from "./schema/root.js"

export const toolName = `get_a_category`
export const toolDescription = `Get Single Browse Category`
export const baseUrl = `https://api.spotify.com/v1`
export const path = `/browse/categories/{category_id}`
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
    "locale"
  ],
  "header": [],
  "path": [
    "category_id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}