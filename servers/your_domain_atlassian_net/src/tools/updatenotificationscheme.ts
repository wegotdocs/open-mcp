import { z } from "zod"

export const toolName = `updatenotificationscheme`
export const toolDescription = `Update notification scheme`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/notificationscheme/{id}`
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

export const inputParams = z.object({ "p_id": z.string().describe("The ID of the notification scheme."), "b_description": z.string().max(4000).describe("The description of the notification scheme.").optional(), "b_name": z.string().max(255).describe("The name of the notification scheme. Must be unique.").optional() }).shape