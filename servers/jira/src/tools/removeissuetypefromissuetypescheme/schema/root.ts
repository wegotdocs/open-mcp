import { z } from "zod"

export const inputParamsSchema = {
  "issueTypeSchemeId": z.number().int().describe("The ID of the issue type scheme."),
  "issueTypeId": z.number().int().describe("The ID of the issue type.")
}