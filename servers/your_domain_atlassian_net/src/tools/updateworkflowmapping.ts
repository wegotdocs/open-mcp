import { z } from "zod"

export const toolName = `updateworkflowmapping`
export const toolDescription = `Set issue types for workflow in workflow scheme`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/workflowscheme/{id}/workflow`
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

export const inputParams = z.object({ "p_id": z.number().int().describe("The ID of the workflow scheme."), "q_workflowName": z.string().describe("The name of the workflow."), "b_defaultMapping": z.boolean().describe("Whether the workflow is the default workflow for the workflow scheme.").optional(), "b_issueTypes": z.array(z.string()).describe("The list of issue type IDs.").optional(), "b_updateDraftIfNeeded": z.boolean().describe("Whether a draft workflow scheme is created or updated when updating an active workflow scheme. The draft is updated with the new workflow-issue types mapping. Defaults to `false`.").optional(), "b_workflow": z.string().describe("The name of the workflow. Optional if updating the workflow-issue types mapping.").optional() }).shape