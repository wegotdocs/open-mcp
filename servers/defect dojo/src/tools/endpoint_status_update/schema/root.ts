import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this endpoint_ status."),
  "date": z.string().date().optional(),
  "mitigated": z.boolean().optional(),
  "false_positive": z.boolean().optional(),
  "out_of_scope": z.boolean().optional(),
  "risk_accepted": z.boolean().optional(),
  "mitigated_by": z.number().int().nullable().optional(),
  "endpoint": z.number().int(),
  "finding": z.number().int()
}