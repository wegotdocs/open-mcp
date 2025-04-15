import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The ID of the issue type."),
  "alternativeIssueTypeId": z.string().describe("The ID of the replacement issue type.").optional()
}