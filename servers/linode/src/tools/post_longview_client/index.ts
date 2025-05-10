export { inputParams } from "./schema/root.js"

export const toolName = `post_longview_client`
export const toolDescription = `Create a Longview client`
export const baseUrl = `https://api.linode.com/v4`
export const path = `/{apiVersion}/longview/clients`
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
    "api_key",
    "apps",
    "created",
    "id",
    "install_code",
    "label",
    "updated"
  ]
}
export const flatMap = {}