export { inputParams } from "./schema/root.js"

export const toolName = `put_user`
export const toolDescription = `Update a user`
export const baseUrl = `https://api.linode.com/v4`
export const path = `/{apiVersion}/account/users/{username}`
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
    "email",
    "last_login",
    "password_created",
    "restricted",
    "ssh_keys",
    "tfa_enabled",
    "username",
    "verified_phone_number"
  ]
}
export const flatMap = {}