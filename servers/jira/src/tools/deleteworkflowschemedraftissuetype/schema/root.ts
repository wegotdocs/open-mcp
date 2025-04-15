import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("The ID of the workflow scheme that the draft belongs to."),
  "issueType": z.string().describe("The ID of the issue type.")
}