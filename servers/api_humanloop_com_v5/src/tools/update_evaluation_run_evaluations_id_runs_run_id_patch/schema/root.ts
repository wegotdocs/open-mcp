import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique identifier for Evaluation."),
  "run_id": z.string().describe("Unique identifier for Run."),
  "control": z.literal(true).describe("If `True`, this Run will be used as the control in the Evaluation. Stats for other Runs will be compared to this Run. This will replace any existing control Run.").optional(),
  "status": z.string().optional()
}