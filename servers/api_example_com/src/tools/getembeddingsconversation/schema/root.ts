import { z } from "zod"

export const inputParamsSchema = {
  "useCaseId": z.string().uuid().describe("Use case identifier.").optional(),
  "returnSources": z.boolean().describe("Optional. If set true (default), returns the sources of the information for private questions. Only returns the answer if set to false").optional()
}