import { z } from "zod"

export const toolName = `updateworkflowschememappings`
export const toolDescription = `Get required status mappings for workflow scheme update`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/workflowscheme/update/mappings`
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
    "defaultWorkflowId",
    "id",
    "workflowsForIssueTypes"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "defaultWorkflowId": z.string().nullable().describe("The ID of the new default workflow for this workflow scheme. Only used in global-scoped workflow schemes. If it isn't specified, is set to *Jira Workflow (jira)*.").optional(), "id": z.string().describe("The ID of the workflow scheme."), "workflowsForIssueTypes": z.array(z.object({ "issueTypeIds": z.array(z.string().describe("The issue types assigned to the workflow.")).describe("The issue types assigned to the workflow."), "workflowId": z.string().describe("The ID of the workflow.") }).strict().describe("The explicit association between issue types and a workflow in a workflow scheme.")).describe("The new workflow to issue type mappings for this workflow scheme.") }).shape