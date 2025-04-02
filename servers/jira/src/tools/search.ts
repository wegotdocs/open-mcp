import { z } from "zod"

export const toolName = `search`
export const toolDescription = `Search statuses paginated`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/statuses/search`
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
export const keys = {
  "query": [
    "expand",
    "projectId",
    "startAt",
    "maxResults",
    "searchString",
    "statusCategory"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "expand": z.string().describe("Deprecated. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/changelog/#CHANGE-2298) for details.\n\nUse [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  `usages` Returns the project and issue types that use the status in their workflow.\n *  `workflowUsages` Returns the workflows that use the status.").optional(), "projectId": z.string().describe("The project the status is part of or null for global statuses.").optional(), "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset)."), "maxResults": z.number().int().describe("The maximum number of items to return per page."), "searchString": z.string().max(255).describe("Term to match status names against or null to search for all statuses in the search scope.").optional(), "statusCategory": z.string().describe("Category of the status to filter by. The supported values are: `TODO`, `IN_PROGRESS`, and `DONE`.").optional() }).shape