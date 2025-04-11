export { inputParams } from "./schema/root.js"

export const toolName = `put_image`
export const toolDescription = `Update an image`
export const baseUrl = `https://api.linode.com/v4`
export const path = `/{apiVersion}/images/{imageId}`
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
    "capabilities",
    "created",
    "created_by",
    "deprecated",
    "description",
    "eol",
    "expiry",
    "id",
    "is_public",
    "label",
    "regions",
    "size",
    "status",
    "tags",
    "total_size",
    "type",
    "updated",
    "vendor"
  ]
}
export const flatMap = {}