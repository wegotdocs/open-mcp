export { inputParams } from "./schema/root.js"

export const toolName = `post_getaccountholder`
export const toolDescription = `Get an account holder`
export const baseUrl = `https://cal-test.adyen.com/cal/services/Account/v6`
export const path = `/getAccountHolder`
export const method = `post`
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
    "key": "X-API-Key",
    "value": "<mcp-env-var>X_API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "X_API_KEY",
    "schemeType": "apiKey",
    "schemeName": "X-API-Key"
  }
]
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "accountCode",
    "accountHolderCode",
    "showDetails"
  ]
}
export const flatMap = {}