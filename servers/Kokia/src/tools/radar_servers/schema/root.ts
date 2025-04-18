import { z } from "zod"

export const inputParamsSchema = {
  "reportingHost": z.string().describe("Show records from specific reporting host").optional()
}