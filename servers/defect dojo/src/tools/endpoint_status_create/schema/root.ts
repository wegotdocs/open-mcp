import { z } from "zod"

export const inputParamsSchema = {
  "date": z.string().date().optional(),
  "mitigated": z.boolean().optional(),
  "false_positive": z.boolean().optional(),
  "out_of_scope": z.boolean().optional(),
  "risk_accepted": z.boolean().optional(),
  "mitigated_by": z.number().int().nullable().optional(),
  "endpoint": z.number().int(),
  "finding": z.number().int()
}