import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique identifier for Flow."),
  "evaluator_aggregates": z.boolean().describe("Whether to include Evaluator aggregate results for the versions in the response").optional()
}