export { inputParams } from "./schema/root.js"

export const toolName = `put_account`
export const toolDescription = `Update your account`
export const baseUrl = `https://api.linode.com/v4`
export const path = `/{apiVersion}/account`
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
    "active_promotions",
    "active_since",
    "address_1",
    "address_2",
    "balance",
    "balance_uninvoiced",
    "billing_source",
    "capabilities",
    "city",
    "company",
    "country",
    "credit_card",
    "email",
    "euuid",
    "first_name",
    "last_name",
    "phone",
    "state",
    "tax_id",
    "zip"
  ]
}
export const flatMap = {}