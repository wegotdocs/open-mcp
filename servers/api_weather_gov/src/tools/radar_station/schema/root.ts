import { z } from "zod"

export const inputParams = {
  "reportingHost": z.string().describe("Show RDA and latency info from specific reporting host").optional(),
  "host": z.string().describe("Show latency info from specific LDM host").optional()
}