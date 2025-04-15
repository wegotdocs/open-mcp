export { inputParams } from "./schema/root.js"

export const toolName = `put_profile`
export const toolDescription = `Update a profile`
export const baseUrl = `https://api.linode.com/v4`
export const path = `/{apiVersion}/profile`
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
    "authentication_type",
    "authorized_keys",
    "email",
    "email_notifications",
    "lish_auth_method",
    "referrals",
    "restricted",
    "timezone",
    "two_factor_auth",
    "uid",
    "username",
    "verified_phone_number"
  ]
}
export const flatMap = {}