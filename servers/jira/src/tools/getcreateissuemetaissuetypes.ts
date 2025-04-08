import { z } from "zod"

export const toolName = `getcreateissuemetaissuetypes`
export const toolDescription = `Get create metadata issue types for a project`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/issue/createmeta/{projectIdOrKey}/issuetypes`
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
    "projectIdOrKey"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "projectIdOrKey": z.string().describe("The ID or key of the project."),
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().lte(200).describe("The maximum number of items to return per page.").optional()
}