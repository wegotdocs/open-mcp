import { z } from "zod"

export const toolName = `getplan`
export const toolDescription = `Get plan`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/plans/plan/{planId}`
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

export const inputParams = z.object({ "p_planId": z.number().int().describe("The ID of the plan."), "q_useGroupId": z.boolean().describe("Whether to return group IDs instead of group names. Group names are deprecated.") }).shape