import { z } from "zod"

export const toolName = `refreshwebhooks`
export const toolDescription = `Extend webhook life`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/webhook/refresh`
export const method = `put`
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
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "webhookIds"
  ]
}
export const flatMap = {}

export const inputParams = {
  "webhookIds": z.array(z.number().int().describe("A list of webhook IDs.")).describe("A list of webhook IDs.")
}