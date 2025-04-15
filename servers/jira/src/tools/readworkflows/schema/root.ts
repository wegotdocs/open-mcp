import { z } from "zod"

export const inputParamsSchema = {
  "expand": z.string().describe("Deprecated. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/changelog/#CHANGE-2298) for details.\n\nUse [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  `workflows.usages` Returns the project and issue types that each workflow is associated with.\n *  `statuses.usages` Returns the project and issue types that each status is associated with.").optional(),
  "useApprovalConfiguration": z.boolean().describe("Return the new field `approvalConfiguration` instead of the deprecated status properties for approval configuration.").optional(),
  "projectAndIssueTypes": z.array(z.object({ "issueTypeId": z.string().describe("The ID of the issue type."), "projectId": z.string().describe("The ID of the project.") }).strict().describe("A project and issueType ID pair that identifies a status mapping.")).describe("The list of projects and issue types to query.").optional(),
  "workflowIds": z.array(z.string().describe("The list of workflow IDs to query.")).describe("The list of workflow IDs to query.").optional(),
  "workflowNames": z.array(z.string().describe("The list of workflow names to query.")).describe("The list of workflow names to query.").optional()
}