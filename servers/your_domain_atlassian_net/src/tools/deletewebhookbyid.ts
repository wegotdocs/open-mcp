import { z } from "zod"

export const toolName = `deletewebhookbyid`
export const toolDescription = `Delete webhooks by ID`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/webhook`
export const method = `delete`
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

export const inputParams = z.object({ "b_webhookIds": z.array(z.number().int().describe("A list of webhook IDs.")).describe("A list of webhook IDs.") }).shape