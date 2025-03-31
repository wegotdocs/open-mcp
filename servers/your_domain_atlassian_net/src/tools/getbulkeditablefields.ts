import { z } from "zod"

export const toolName = `getbulkeditablefields`
export const toolDescription = `Get bulk editable fields`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/bulk/issues/fields`
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

export const inputParams = z.object({ "q_issueIdsOrKeys": z.string().describe("The IDs or keys of the issues to get editable fields from."), "q_searchText": z.string().describe("(Optional)The text to search for in the editable fields.").optional(), "q_endingBefore": z.string().describe("(Optional)The end cursor for use in pagination.").optional(), "q_startingAfter": z.string().describe("(Optional)The start cursor for use in pagination.").optional() }).shape