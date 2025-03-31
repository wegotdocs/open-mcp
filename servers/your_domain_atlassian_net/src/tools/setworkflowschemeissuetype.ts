import { z } from "zod"

export const toolName = `setworkflowschemeissuetype`
export const toolDescription = `Set workflow for issue type in workflow scheme`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/workflowscheme/{id}/issuetype/{issueType}`
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

export const inputParams = z.object({ "p_id": z.number().int().describe("The ID of the workflow scheme."), "p_issueType": z.string().describe("The ID of the issue type."), "b_issueType": z.string().describe("The ID of the issue type. Not required if updating the issue type-workflow mapping.").optional(), "b_updateDraftIfNeeded": z.boolean().describe("Set to true to create or update the draft of a workflow scheme and update the mapping in the draft, when the workflow scheme cannot be edited. Defaults to `false`. Only applicable when updating the workflow-issue types mapping.").optional(), "b_workflow": z.string().describe("The name of the workflow.").optional() }).shape