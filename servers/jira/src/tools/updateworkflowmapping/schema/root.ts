import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("The ID of the workflow scheme."),
  "workflowName": z.string().describe("The name of the workflow."),
  "defaultMapping": z.boolean().describe("Whether the workflow is the default workflow for the workflow scheme.").optional(),
  "issueTypes": z.array(z.string()).describe("The list of issue type IDs.").optional(),
  "updateDraftIfNeeded": z.boolean().describe("Whether a draft workflow scheme is created or updated when updating an active workflow scheme. The draft is updated with the new workflow-issue types mapping. Defaults to `false`.").optional(),
  "workflow": z.string().describe("The name of the workflow. Optional if updating the workflow-issue types mapping.").optional()
}