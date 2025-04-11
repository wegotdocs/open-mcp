export { inputParams } from "./schema/root.js"

export const toolName = `get_object_storage_bucket_content`
export const toolDescription = `List Object Storage bucket contents`
export const baseUrl = `https://api.linode.com/v4`
export const path = `/{apiVersion}/object-storage/buckets/{regionId}/{bucket}/object-list`
export const method = `get`
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
  "query": [
    "marker",
    "delimiter",
    "prefix",
    "page_size"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}