import { z } from "zod"

export const toolName = `getworklog`
export const toolDescription = `Get worklog`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/issue/{issueIdOrKey}/worklog/{id}`
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
    "expand"
  ],
  "header": [],
  "path": [
    "issueIdOrKey",
    "id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "issueIdOrKey": z.string().describe("The ID or key of the issue."),
  "id": z.string().describe("The ID of the worklog."),
  "expand": z.string().describe("Use [expand](#expansion) to include additional information about work logs in the response. This parameter accepts\n\n`properties`, which returns worklog properties.").optional()
}