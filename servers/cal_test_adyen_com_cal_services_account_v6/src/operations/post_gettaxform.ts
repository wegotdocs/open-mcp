import { z } from "zod"

export const toolName = `post_gettaxform`
export const toolDescription = `Get a tax form`
export const baseUrl = `https://cal-test.adyen.com/cal/services/Account/v6`
export const path = `/getTaxForm`
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

export const inputParams = z.object({ "body": z.object({ "accountHolderCode": z.string().describe("The account holder code you provided when you created the account holder."), "formType": z.string().describe("Type of the requested tax form. For example, 1099-K."), "year": z.number().int().describe("Applicable tax year in the YYYY format.") }).strict().optional() }).shape