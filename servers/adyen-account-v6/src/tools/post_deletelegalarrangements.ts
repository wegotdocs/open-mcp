import { z } from "zod"

export const toolName = `post_deletelegalarrangements`
export const toolDescription = `Delete legal arrangements`
export const baseUrl = `https://cal-test.adyen.com/cal/services/Account/v6`
export const path = `/deleteLegalArrangements`
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
    "accountHolderCode",
    "legalArrangements"
  ]
}
export const flatMap = {}

export const inputParams = {
  "accountHolderCode": z.string().describe("The code of the account holder."),
  "legalArrangements": z.array(z.object({ "legalArrangementCode": z.string().describe("The code of the legal arrangement to be deleted. If you also send `legalArrangementEntityCodes`, only the entities listed will be deleted."), "legalArrangementEntityCodes": z.array(z.string()).describe("List of legal arrangement entities to be deleted.").optional() }).strict()).describe("List of legal arrangements.")
}