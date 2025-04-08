import { z } from "zod"

export const toolName = `getusernavproperty`
export const toolDescription = `Get user nav property`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/user/nav4-opt-property/{propertyKey}`
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
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]
export const keys = {
  "query": [
    "accountId"
  ],
  "header": [],
  "path": [
    "propertyKey"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "propertyKey": z.string().describe("The key of the user's property."),
  "accountId": z.string().max(128).describe("The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.").optional()
}