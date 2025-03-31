import { z } from "zod"

export const toolName = `getplans`
export const toolDescription = `Get plans paginated`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/plans/plan`
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

export const inputParams = z.object({ "q_includeTrashed": z.boolean().describe("Whether to include trashed plans in the results."), "q_includeArchived": z.boolean().describe("Whether to include archived plans in the results."), "q_cursor": z.string().describe("The cursor to start from. If not provided, the first page will be returned."), "q_maxResults": z.number().int().describe("The maximum number of plans to return per page. The maximum value is 50. The default value is 50.") }).shape