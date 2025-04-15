import { z } from "zod"

export const inputParams = {
  "limit": z.number().describe("Maximum number of Teams which may be returned.").optional(),
  "since": z.number().describe("Timestamp (in milliseconds) to only include Teams created since then.").optional(),
  "until": z.number().describe("Timestamp (in milliseconds) to only include Teams created until then.").optional()
}