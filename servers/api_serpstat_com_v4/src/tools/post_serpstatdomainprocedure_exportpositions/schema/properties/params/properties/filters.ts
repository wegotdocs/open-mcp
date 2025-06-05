import { z } from "zod"

export const inputParamsSchema = {
  "right_spelling": z.boolean().describe("Filters by spelling correction. If true, results will include corrected spelling; if false, only exact spelling is used.").optional(),
  "position_dynamic": z.enum(["new","rise","down"]).describe("Filters results by position dynamics:\n- 'new' for newly appearing results,\n- 'rise' for results that have moved up,\n- 'down' for results that have moved down.").optional()
}