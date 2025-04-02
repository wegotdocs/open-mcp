import { z } from "zod"

export const toolName = `submitbulkdelete`
export const toolDescription = `Bulk delete issues`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/bulk/issues/delete`
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
    "selectedIssueIdsOrKeys",
    "sendBulkNotification"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "selectedIssueIdsOrKeys": z.array(z.string()).describe("List of issue IDs or keys which are to be bulk deleted. These IDs or keys can be from different projects and issue types."), "sendBulkNotification": z.boolean().nullable().describe("A boolean value that indicates whether to send a bulk change notification when the issues are being deleted.\n\nIf `true`, dispatches a bulk notification email to users about the updates.") }).shape