import { z } from "zod"

export const toolName = `setworkflowschemedraftissuetype`
export const toolDescription = `Set workflow for issue type in draft workflow scheme`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/workflowscheme/{id}/draft/issuetype/{issueType}`
export const method = `put`
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
  "path": [
    "id",
    "issueType"
  ],
  "cookie": [],
  "body": [
    "b_issueType",
    "updateDraftIfNeeded",
    "workflow"
  ]
}
export const flatMap = {
  "b_issueType": "issueType"
}

export const inputParams = z.object({ "id": z.number().int().describe("The ID of the workflow scheme that the draft belongs to."), "issueType": z.string().describe("The ID of the issue type."), "b_issueType": z.string().describe("The ID of the issue type. Not required if updating the issue type-workflow mapping.").optional(), "updateDraftIfNeeded": z.boolean().describe("Set to true to create or update the draft of a workflow scheme and update the mapping in the draft, when the workflow scheme cannot be edited. Defaults to `false`. Only applicable when updating the workflow-issue types mapping.").optional(), "workflow": z.string().describe("The name of the workflow.").optional() }).shape