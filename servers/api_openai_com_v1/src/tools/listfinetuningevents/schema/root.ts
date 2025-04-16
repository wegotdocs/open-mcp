import { z } from "zod"

export const inputParamsSchema = {
  "fine_tuning_job_id": z.string().describe("The ID of the fine-tuning job to get events for.\n"),
  "after": z.string().describe("Identifier for the last event from the previous pagination request.").optional(),
  "limit": z.number().int().describe("Number of events to retrieve.").optional()
}