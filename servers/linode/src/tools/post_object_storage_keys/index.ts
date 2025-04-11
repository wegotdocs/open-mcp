export { inputParams } from "./schema/root.js"

export const toolName = `post_object_storage_keys`
export const toolDescription = `Create an Object Storage key`
export const baseUrl = `https://api.linode.com/v4`
export const path = `/{apiVersion}/object-storage/keys`
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
    "bucket_access",
    "label",
    "regions"
  ]
}
export const flatMap = {}