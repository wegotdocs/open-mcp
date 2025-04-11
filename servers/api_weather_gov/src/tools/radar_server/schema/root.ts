import { z } from "zod"

export const inputParams = {
  "reportingHost": z.string().describe("Show records from specific reporting host").optional()
}