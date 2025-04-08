import { z } from "zod"

export const toolName = `searchforissuesids`
export const toolDescription = `Search issue IDs using JQL`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/search/id`
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
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "jql",
    "maxResults",
    "nextPageToken"
  ]
}
export const flatMap = {}

export const inputParams = {
  "jql": z.string().describe("A [JQL](https://confluence.atlassian.com/x/egORLQ) expression. Order by clauses are not allowed.").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
  "nextPageToken": z.string().describe("The continuation token to fetch the next page. This token is provided by the response of this endpoint.").optional()
}