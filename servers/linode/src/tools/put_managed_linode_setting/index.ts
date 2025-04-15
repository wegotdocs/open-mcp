export { inputParams } from "./schema/root.js"

export const toolName = `put_managed_linode_setting`
export const toolDescription = `Update a Linode's managed settings`
export const baseUrl = `https://api.linode.com/v4`
export const path = `/{apiVersion}/managed/linode-settings/{linodeId}`
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
    "id",
    "label",
    "ssh"
  ]
}
export const flatMap = {}