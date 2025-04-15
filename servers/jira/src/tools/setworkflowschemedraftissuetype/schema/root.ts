import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("The ID of the workflow scheme that the draft belongs to."),
  "issueType": z.string().describe("The ID of the issue type."),
  "b_issueType": z.string().describe("The ID of the issue type. Not required if updating the issue type-workflow mapping.").optional(),
  "updateDraftIfNeeded": z.boolean().describe("Set to true to create or update the draft of a workflow scheme and update the mapping in the draft, when the workflow scheme cannot be edited. Defaults to `false`. Only applicable when updating the workflow-issue types mapping.").optional(),
  "workflow": z.string().describe("The name of the workflow.").optional()
}