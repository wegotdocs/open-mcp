import { z } from "zod"

export const inputParamsSchema = {
  "jobId": z.string().describe("The requested job id")
}