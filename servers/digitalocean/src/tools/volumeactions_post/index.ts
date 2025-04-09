export { inputParams } from "./schema/root.js"

export const toolName = `volumeactions_post`
export const toolDescription = `Initiate A Block Storage Action By Volume Name`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/volumes/actions`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]
export const keys = {
  "query": [
    "per_page",
    "page"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}