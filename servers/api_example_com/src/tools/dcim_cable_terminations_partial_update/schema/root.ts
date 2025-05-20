import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this cable termination."),
  "cable": z.number().int().optional(),
  "cable_end": z.enum(["A","B"]).describe("* `A` - A\n* `B` - B").optional(),
  "termination_type": z.string().optional(),
  "termination_id": z.number().int().gte(0).lte(9223372036854776000).optional()
}