import { z } from "zod"

export const toolName = `getprioritiesbypriorityscheme`
export const toolDescription = `Get priorities by priority scheme`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/priorityscheme/{schemeId}/priorities`
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
    "startAt",
    "maxResults"
  ],
  "header": [],
  "path": [
    "schemeId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "schemeId": z.string().describe("The priority scheme ID."),
  "startAt": z.string().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.string().describe("The maximum number of items to return per page.").optional()
}