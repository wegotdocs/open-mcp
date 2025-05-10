import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique identifier for Evaluation."),
  "run_id": z.string().describe("Unique identifier for Run."),
  "log_ids": z.array(z.string()).describe("The IDs of the Logs to add to the Run.")
}