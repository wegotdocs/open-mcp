export { inputParams } from "./schema/root.js"

export const toolName = `getissuingcards`
export const toolDescription = `List all cards`
export const baseUrl = `https://api.stripe.com`
export const path = `/v1/issuing/cards`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
    "in": "header",
    "envVarName": "USERNAME_PASSWORD_BASE64",
    "schemeType": "http",
    "schemeScheme": "basic"
  },
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
    "cardholder",
    "created",
    "ending_before",
    "exp_month",
    "exp_year",
    "expand",
    "last4",
    "limit",
    "personalization_design",
    "starting_after",
    "status",
    "type"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}