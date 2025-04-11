export { inputParams } from "./schema/root.js"

export const toolName = `post_upload_image`
export const toolDescription = `Upload an image`
export const baseUrl = `https://api.linode.com/v4`
export const path = `/{apiVersion}/images/upload`
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
    "label",
    "region",
    "tags"
  ]
}
export const flatMap = {}