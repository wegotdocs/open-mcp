export { inputParams } from "./schema/root.js"

export const toolName = `put_user_grants`
export const toolDescription = `Update a user's grants`
export const baseUrl = `https://api.linode.com/v4`
export const path = `/{apiVersion}/account/users/{username}/grants`
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
    "database",
    "domain",
    "firewall",
    "global",
    "image",
    "linode",
    "longview",
    "nodebalancer",
    "stackscript",
    "volume",
    "vpc"
  ]
}
export const flatMap = {}