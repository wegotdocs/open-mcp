import { z } from "zod"

export const inputParams = {
  "jobId": z.string().describe("The ID of the job to retrieve")
}