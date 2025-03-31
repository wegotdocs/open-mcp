import { z } from "zod"

export const toolName = `changefilterowner`
export const toolDescription = `Change filter owner`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/filter/{id}/owner`
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

export const inputParams = z.object({ "p_id": z.number().int().describe("The ID of the filter to update."), "b_accountId": z.string().describe("The account ID of the new owner.") }).shape