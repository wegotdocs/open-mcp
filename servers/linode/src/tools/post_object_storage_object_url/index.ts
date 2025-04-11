export { inputParams } from "./schema/root.js"

export const toolName = `post_object_storage_object_url`
export const toolDescription = `Create a URL for an object`
export const baseUrl = `https://api.linode.com/v4`
export const path = `/{apiVersion}/object-storage/buckets/{regionId}/{bucket}/object-url`
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
    "content_type",
    "expires_in",
    "method",
    "name"
  ]
}
export const flatMap = {}