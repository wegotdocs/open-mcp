import { z } from "zod"

export const inputParamsSchema = {
  "expand": z.string().describe("Deprecated. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/changelog/#CHANGE-2298) for details.\n\nUse [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  `workflows.usages` Returns the project and issue types that each workflow in the workflow scheme is associated with.").optional(),
  "projectIds": z.array(z.string().nullable().describe("The list of project IDs to query.")).nullable().describe("The list of project IDs to query.").optional(),
  "workflowSchemeIds": z.array(z.string().nullable().describe("The list of workflow scheme IDs to query.")).nullable().describe("The list of workflow scheme IDs to query.").optional()
}