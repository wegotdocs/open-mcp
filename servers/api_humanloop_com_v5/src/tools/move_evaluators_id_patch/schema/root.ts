import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique identifier for Evaluator."),
  "path": z.string().describe("Path of the Evaluator including the Evaluator name, which is used as a unique identifier.").optional(),
  "name": z.string().describe("Name of the Evaluator, which is used as a unique identifier.").optional()
}