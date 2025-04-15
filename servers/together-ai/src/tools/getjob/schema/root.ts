import { z } from "zod"

export const inputParamsSchema = {
  "jobId": z.string().describe("The ID of the job to retrieve")
}