export { inputParams } from "./schema/root.js"

export const toolName = `put_account_settings`
export const toolDescription = `Update account settings`
export const baseUrl = `https://api.linode.com/v4`
export const path = `/{apiVersion}/account/settings`
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
    "backups_enabled",
    "longview_subscription",
    "managed",
    "network_helper",
    "object_storage"
  ]
}
export const flatMap = {}