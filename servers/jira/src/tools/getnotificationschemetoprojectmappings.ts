import { z } from "zod"

export const toolName = `getnotificationschemetoprojectmappings`
export const toolDescription = `Get projects using notification schemes paginated`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/notificationscheme/project`
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
    "maxResults",
    "notificationSchemeId",
    "projectId"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "startAt": z.string().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.string().describe("The maximum number of items to return per page.").optional(),
  "notificationSchemeId": z.array(z.string()).describe("The list of notifications scheme IDs to be filtered out").optional(),
  "projectId": z.array(z.string()).describe("The list of project IDs to be filtered out").optional()
}