export { inputParams } from "./schema/root.js"

export const toolName = `put_object_storage_bucket_acl`
export const toolDescription = `Update an object's ACL configuration`
export const baseUrl = `https://api.linode.com/v4`
export const path = `/{apiVersion}/object-storage/buckets/{regionId}/{bucket}/object-acl`
export const method = `put`
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
    "name"
  ]
}
export const flatMap = {}