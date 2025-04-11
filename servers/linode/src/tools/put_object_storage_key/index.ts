export { inputParams } from "./schema/root.js"

export const toolName = `put_object_storage_key`
export const toolDescription = `Update an Object Storage key`
export const baseUrl = `https://api.linode.com/v4`
export const path = `/{apiVersion}/object-storage/keys/{keyId}`
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
    "label",
    "regions"
  ]
}
export const flatMap = {}