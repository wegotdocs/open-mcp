export { inputParams } from "./schema/root.js"

export const toolName = `post_profile_phone_number`
export const toolDescription = `Send a phone number verification code`
export const baseUrl = `https://api.linode.com/v4`
export const path = `/{apiVersion}/profile/phone-number`
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
    "iso_code",
    "phone_number"
  ]
}
export const flatMap = {}