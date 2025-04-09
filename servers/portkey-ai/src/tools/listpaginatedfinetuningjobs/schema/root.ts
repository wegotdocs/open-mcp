import { z } from "zod"

export const inputParams = {
  "after": z.string().describe("Identifier for the last job from the previous pagination request.").optional(),
  "limit": z.number().int().describe("Number of fine-tuning jobs to retrieve.").optional()
}