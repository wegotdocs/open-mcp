import { z } from "zod"

export const inputParamsSchema = {
  "options": z.array(z.object({ "optionText": z.string().optional(), "tally": z.string().optional() })).describe("The options will be returned in the order that is displayed in 1P").optional(),
  "questionText": z.string().optional()
}