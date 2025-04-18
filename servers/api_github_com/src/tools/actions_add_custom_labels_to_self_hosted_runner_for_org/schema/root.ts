import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "runner_id": z.number().int().describe("Unique identifier of the self-hosted runner."),
  "labels": z.array(z.string()).min(1).max(100).describe("The names of the custom labels to add to the runner.")
}