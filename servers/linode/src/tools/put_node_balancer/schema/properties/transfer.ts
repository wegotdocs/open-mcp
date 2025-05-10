import { z } from "zod"

export const inputParams = {
  "in": z.number().nullable().describe("__Read-only__ The total outbound transfer, in MB, used for this NodeBalancer this month.").readonly().optional(),
  "out": z.number().nullable().describe("__Read-only__ The total inbound transfer, in MB, used for this NodeBalancer this month.").readonly().optional(),
  "total": z.number().nullable().describe("__Read-only__ The total transfer, in MB, used by this NodeBalancer this month.").readonly().optional()
}