import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Pipeline name"),
  "stages_attributes": z.array(z.object({ "name": z.string().describe("The name of the stage").optional(), "close_probability": z.number().int().describe("The probability of closing a deal in this stage").optional() })).describe("The stages of the pipeline. The stages are ordered by the position attribute.")
}