import { z } from "zod"

export const toolName = `movescreentab`
export const toolDescription = `Move screen tab`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/screens/{screenId}/tabs/{tabId}/move/{pos}`
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
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({ "p_screenId": z.number().int().describe("The ID of the screen."), "p_tabId": z.number().int().describe("The ID of the screen tab."), "p_pos": z.number().int().describe("The position of tab. The base index is 0.") }).shape