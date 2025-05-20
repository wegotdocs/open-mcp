import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this cable termination."),
  "cable": z.number().int(),
  "cable_end": z.enum(["A","B"]).describe("* `A` - A\n* `B` - B"),
  "termination_type": z.string(),
  "termination_id": z.number().int().gte(0).lte(9223372036854776000)
}