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
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "maxResults",
    "priorities",
    "projects",
    "schemeId",
    "startAt"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "maxResults": z.number().int().describe("The maximum number of results that could be on the page.").optional(), "priorities": z.string().optional(), "projects": z.string().optional(), "schemeId": z.number().int().describe("The id of the priority scheme.").optional(), "startAt": z.number().int().describe("The index of the first item returned on the page.").optional() }).shape