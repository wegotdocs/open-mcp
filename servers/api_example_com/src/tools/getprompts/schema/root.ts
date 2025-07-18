import { z } from "zod"

export const inputParamsSchema = {
  "UseCaseId": z.string().uuid().describe("The optional use case identifier for filtering prompts.").optional()
}