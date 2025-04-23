import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique identifier for Evaluation."),
  "evaluator_version_id": z.string().describe("Unique identifier for Evaluator Version.")
}