import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("The ID of the workflow scheme."),
  "issueType": z.string().describe("The ID of the issue type."),
  "returnDraftIfExists": z.boolean().describe("Returns the mapping from the workflow scheme's draft rather than the workflow scheme, if set to true. If no draft exists, the mapping from the workflow scheme is returned.").optional()
}