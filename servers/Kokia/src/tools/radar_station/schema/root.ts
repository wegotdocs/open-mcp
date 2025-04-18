import { z } from "zod"

export const inputParamsSchema = {
  "reportingHost": z.string().describe("Show RDA and latency info from specific reporting host").optional(),
  "host": z.string().describe("Show latency info from specific LDM host").optional()
}