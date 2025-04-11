export { inputParams } from "./schema/root.js"

export const toolName = `post_image`
export const toolDescription = `Create an image`
export const baseUrl = `https://api.linode.com/v4`
export const path = `/{apiVersion}/images`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  },
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
  "body": [
    "cloud_init",
    "description",
    "disk_id",
    "label",
    "tags"
  ]
}
export const flatMap = {}