import { z } from "zod"

export const toolName = `updatesecuritylevel`
export const toolDescription = `Update issue security level`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/issuesecurityschemes/{schemeId}/level/{levelId}`
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

export const inputParams = z.object({ "p_schemeId": z.string().describe("The ID of the issue security scheme level belongs to."), "p_levelId": z.string().describe("The ID of the issue security level to update."), "b_description": z.string().max(255).describe("The description of the issue security scheme level.").optional(), "b_name": z.string().max(60).describe("The name of the issue security scheme level. Must be unique.").optional() }).shape