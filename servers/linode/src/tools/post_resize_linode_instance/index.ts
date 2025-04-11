export { inputParams } from "./schema/root.js"

export const toolName = `post_resize_linode_instance`
export const toolDescription = `Resize a Linode`
export const baseUrl = `https://api.linode.com/v4`
export const path = `/{apiVersion}/linode/instances/{linodeId}/resize`
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
    "allow_auto_disk_resize",
    "migration_type",
    "type"
  ]
}
export const flatMap = {}