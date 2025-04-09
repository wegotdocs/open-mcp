import { z } from "zod"

export const inputParams = {
  "id": z.number().int().describe("The ID of the workflow scheme."),
  "updateDraftIfNeeded": z.boolean().describe("Set to true to create or update the draft of a workflow scheme and delete the mapping from the draft, when the workflow scheme cannot be edited. Defaults to `false`.").optional()
}