import { z } from "zod"

export const toolName = `getissuelink`
export const toolDescription = `Get issue link`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/issueLink/{linkId}`
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

export const inputParams = z.object({ "p_linkId": z.string().describe("The ID of the issue link.") }).shape