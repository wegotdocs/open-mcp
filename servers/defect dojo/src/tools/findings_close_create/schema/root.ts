import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this finding."),
  "is_mitigated": z.boolean().optional(),
  "mitigated": z.string().datetime({ offset: true }).optional(),
  "false_p": z.boolean().optional(),
  "out_of_scope": z.boolean().optional(),
  "duplicate": z.boolean().optional()
}