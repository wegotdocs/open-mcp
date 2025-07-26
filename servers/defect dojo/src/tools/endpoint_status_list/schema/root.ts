import { z } from "zod"

export const inputParamsSchema = {
  "endpoint": z.number().int().optional(),
  "false_positive": z.boolean().optional(),
  "finding": z.number().int().optional(),
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "mitigated": z.boolean().optional(),
  "mitigated_by": z.number().int().optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "out_of_scope": z.boolean().optional(),
  "risk_accepted": z.boolean().optional()
}