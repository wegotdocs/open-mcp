import { z } from "zod"

export const toolName = `getcreateissuemetaissuetypeid`
export const toolDescription = `Get create field metadata for a project and issue type id`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/issue/createmeta/{projectIdOrKey}/issuetypes/{issueTypeId}`
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

export const inputParams = z.object({ "p_projectIdOrKey": z.string().describe("The ID or key of the project."), "p_issueTypeId": z.string().describe("The issuetype ID."), "q_startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset)."), "q_maxResults": z.number().int().lte(200).describe("The maximum number of items to return per page.") }).shape