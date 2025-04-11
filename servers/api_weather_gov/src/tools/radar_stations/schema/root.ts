import { z } from "zod"

export const inputParams = {
  "stationType": z.array(z.string().regex(new RegExp("^[A-Za-z0-9-]+$"))).describe("Limit results to a specific station type or types").optional(),
  "reportingHost": z.string().describe("Show RDA and latency info from specific reporting host").optional(),
  "host": z.string().describe("Show latency info from specific LDM host").optional()
}