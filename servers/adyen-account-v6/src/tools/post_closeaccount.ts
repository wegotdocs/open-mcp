import { z } from "zod"

export const toolName = `post_closeaccount`
export const toolDescription = `Close an account`
export const baseUrl = `https://cal-test.adyen.com/cal/services/Account/v6`
export const path = `/closeAccount`
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
    "accountCode"
  ]
}
export const flatMap = {}

export const inputParams = {
  "accountCode": z.string().describe("The code of account to be closed.")
}