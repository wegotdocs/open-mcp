import { z } from "zod"

export const toolName = `getavailabletransitions`
export const toolDescription = `Get available transitions`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/bulk/issues/transition`
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

export const inputParams = z.object({ "q_issueIdsOrKeys": z.string().describe("Comma (,) separated Ids or keys of the issues to get transitions available for them."), "q_endingBefore": z.string().describe("(Optional)The end cursor for use in pagination.").optional(), "q_startingAfter": z.string().describe("(Optional)The start cursor for use in pagination.").optional() }).shape