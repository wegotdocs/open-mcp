import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique identifier for Flow."),
  "environment_id": z.string().describe("Unique identifier for the Environment to remove the deployment from.")
}