export { inputParams } from "./schema/root.js"

export const toolName = `post_account_agreements`
export const toolDescription = `Acknowledge agreements`
export const baseUrl = `https://api.linode.com/v4`
export const path = `/{apiVersion}/account/agreements`
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
    "billing_agreement",
    "eu_model",
    "master_service_agreement",
    "privacy_policy"
  ]
}
export const flatMap = {}