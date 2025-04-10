export { inputParams } from "./schema/root.js"

export const toolName = `get_payouts_transactions_id`
export const toolDescription = `List all payout transactions`
export const baseUrl = `https://api.shopier.com/v1`
export const path = `/payouts/transactions/{id}`
export const method = `get`
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
  "query": [
    "limit",
    "page",
    "sort"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}