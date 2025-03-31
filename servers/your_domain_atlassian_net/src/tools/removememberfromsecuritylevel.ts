import { z } from "zod"

export const toolName = `removememberfromsecuritylevel`
export const toolDescription = `Remove member from issue security level`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/issuesecurityschemes/{schemeId}/level/{levelId}/member/{memberId}`
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

export const inputParams = z.object({ "p_schemeId": z.string().describe("The ID of the issue security scheme."), "p_levelId": z.string().describe("The ID of the issue security level."), "p_memberId": z.string().describe("The ID of the issue security level member to be removed.") }).shape