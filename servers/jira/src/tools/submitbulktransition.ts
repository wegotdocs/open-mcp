import { z } from "zod"

export const toolName = `submitbulktransition`
export const toolDescription = `Bulk transition issue statuses`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/bulk/issues/transition`
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
    "bulkTransitionInputs",
    "sendBulkNotification"
  ]
}
export const flatMap = {}

export const inputParams = {
  "bulkTransitionInputs": z.array(z.object({ "selectedIssueIdsOrKeys": z.array(z.string()).describe("List of all the issue IDs or keys that are to be bulk transitioned."), "transitionId": z.string().describe("The ID of the transition that is to be performed on the issues.") }).strict()).describe("List of objects and each object has two properties:\n\n *  Issues that will be bulk transitioned.\n *  TransitionId that corresponds to a specific transition of issues that share the same workflow."),
  "sendBulkNotification": z.boolean().nullable().describe("A boolean value that indicates whether to send a bulk change notification when the issues are being transitioned.\n\nIf `true`, dispatches a bulk notification email to users about the updates.").optional()
}