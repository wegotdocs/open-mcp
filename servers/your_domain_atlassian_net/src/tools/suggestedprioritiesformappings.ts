import { z } from "zod"

export const toolName = `suggestedprioritiesformappings`
export const toolDescription = `Suggested priorities for mappings`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/priorityscheme/mappings`
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

export const inputParams = z.object({ "b_maxResults": z.number().int().describe("The maximum number of results that could be on the page.").optional(), "b_priorities": z.string().optional(), "b_projects": z.string().optional(), "b_schemeId": z.number().int().describe("The id of the priority scheme.").optional(), "b_startAt": z.number().int().describe("The index of the first item returned on the page.").optional() }).shape