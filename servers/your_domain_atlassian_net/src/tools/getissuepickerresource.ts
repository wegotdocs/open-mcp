import { z } from "zod"

export const toolName = `getissuepickerresource`
export const toolDescription = `Get issue picker suggestions`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/issue/picker`
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

export const inputParams = z.object({ "q_query": z.string().describe("A string to match against text fields in the issue such as title, description, or comments.").optional(), "q_currentJQL": z.string().describe("A JQL query defining a list of issues to search for the query term. Note that `username` and `userkey` cannot be used as search terms for this parameter, due to privacy reasons. Use `accountId` instead.").optional(), "q_currentIssueKey": z.string().describe("The key of an issue to exclude from search results. For example, the issue the user is viewing when they perform this query.").optional(), "q_currentProjectId": z.string().describe("The ID of a project that suggested issues must belong to.").optional(), "q_showSubTasks": z.boolean().describe("Indicate whether to include subtasks in the suggestions list.").optional(), "q_showSubTaskParent": z.boolean().describe("When `currentIssueKey` is a subtask, whether to include the parent issue in the suggestions if it matches the query.").optional() }).shape