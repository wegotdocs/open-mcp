import { z } from "zod"

export const inputParamsSchema = {
  "environment": z.string(),
  "resource_name": z.string(),
  "tail_lines": z.number().int().describe("Number of log lines to retrieve").optional()
}