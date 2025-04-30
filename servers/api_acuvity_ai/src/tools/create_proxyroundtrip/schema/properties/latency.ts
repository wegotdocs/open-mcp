import { z } from "zod"

export const inputParamsSchema = {
  "accessPolicy": z.number().int().describe("How much time it took to run the access policy in nanoseconds.").optional(),
  "analysis": z.number().int().describe("How much time it took to run content analysis in nanoseconds.").optional(),
  "assignPolicy": z.number().int().describe("How much time it took to run the assign policy in nanoseconds.").optional(),
  "contentPolicy": z.number().int().describe("How much time it took to run content policy in nanoseconds.").optional(),
  "extraction": z.number().int().describe("How much time it took to run input or output extraction in nanoseconds.").optional()
}