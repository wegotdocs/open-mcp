import { z } from "zod"

export const inputParamsSchema = {
  "fine_tuning_job_id": z.string().describe("The ID of the fine-tuning job to cancel.\n")
}