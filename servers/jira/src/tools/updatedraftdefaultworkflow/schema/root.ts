import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("The ID of the workflow scheme that the draft belongs to."),
  "updateDraftIfNeeded": z.boolean().describe("Whether a draft workflow scheme is created or updated when updating an active workflow scheme. The draft is updated with the new default workflow. Defaults to `false`.").optional(),
  "workflow": z.string().describe("The name of the workflow to set as the default workflow.")
}