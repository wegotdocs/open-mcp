export { inputParams } from "./schema/root.js"

export const toolName = `post_object_storage_bucket`
export const toolDescription = `Create an Object Storage bucket`
export const baseUrl = `https://api.linode.com/v4`
export const path = `/{apiVersion}/object-storage/buckets`
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
    "acl",
    "cors_enabled",
    "endpoint_type",
    "label",
    "region",
    "s3_endpoint"
  ]
}
export const flatMap = {}