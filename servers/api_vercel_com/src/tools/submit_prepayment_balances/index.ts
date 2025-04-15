export { inputParams } from "./schema/root.js"

export const toolName = `submit_prepayment_balances`
export const toolDescription = `Submit Prepayment Balances`
export const baseUrl = `https://api.vercel.com`
export const path = `/v1/installations/{integrationConfigurationId}/billing/balance`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "integrationConfigurationId"
  ],
  "cookie": [],
  "body": [
    "timestamp",
    "balances"
  ]
}
export const flatMap = {}