import { z } from "zod"

export const inputParamsSchema = {
  "defaultWorkflowId": z.string().nullable().describe("The ID of the new default workflow for this workflow scheme. Only used in global-scoped workflow schemes. If it isn't specified, is set to *Jira Workflow (jira)*.").optional(),
  "id": z.string().describe("The ID of the workflow scheme."),
  "workflowsForIssueTypes": z.array(z.object({ "issueTypeIds": z.array(z.string().describe("The issue types assigned to the workflow.")).describe("The issue types assigned to the workflow."), "workflowId": z.string().describe("The ID of the workflow.") }).strict().describe("The explicit association between issue types and a workflow in a workflow scheme.")).describe("The new workflow to issue type mappings for this workflow scheme.")
}