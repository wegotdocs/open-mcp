export { inputParams } from "./schema/root.js"

export const toolName = `dropletactions_post_bytag`
export const toolDescription = `Acting on Tagged Droplets`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/droplets/actions`
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
    "tag_name"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}