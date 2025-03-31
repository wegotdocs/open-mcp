import { z } from "zod"

export const toolName = `getcontextsforfield`
export const toolDescription = `Get custom field contexts`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/field/{fieldId}/context`
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

export const inputParams = z.object({ "p_fieldId": z.string().describe("The ID of the custom field."), "q_isAnyIssueType": z.boolean().describe("Whether to return contexts that apply to all issue types.").optional(), "q_isGlobalContext": z.boolean().describe("Whether to return contexts that apply to all projects.").optional(), "q_contextId": z.array(z.number().int()).describe("The list of context IDs. To include multiple contexts, separate IDs with ampersand: `contextId=10000&contextId=10001`.").optional(), "q_startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset)."), "q_maxResults": z.number().int().describe("The maximum number of items to return per page.") }).shape