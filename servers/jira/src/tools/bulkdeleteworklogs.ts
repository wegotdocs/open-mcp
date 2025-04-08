import { z } from "zod"

export const toolName = `bulkdeleteworklogs`
export const toolDescription = `Bulk delete worklogs`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/issue/{issueIdOrKey}/worklog`
export const method = `delete`
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
    "adjustEstimate",
    "overrideEditableFlag"
  ],
  "header": [],
  "path": [
    "issueIdOrKey"
  ],
  "cookie": [],
  "body": [
    "ids"
  ]
}
export const flatMap = {}

export const inputParams = {
  "issueIdOrKey": z.string().describe("The ID or key of the issue."),
  "adjustEstimate": z.enum(["leave","auto"]).describe("Defines how to update the issue's time estimate, the options are:\n\n *  `leave` Leaves the estimate unchanged.\n *  `auto` Reduces the estimate by the aggregate value of `timeSpent` across all worklogs being deleted.").optional(),
  "overrideEditableFlag": z.boolean().describe("Whether the work log entries should be removed to the issue even if the issue is not editable, because jira.issue.editable set to false or missing. For example, the issue is closed. Connect and Forge app users with admin permission can use this flag.").optional(),
  "ids": z.array(z.number().int()).describe("A list of worklog IDs.")
}