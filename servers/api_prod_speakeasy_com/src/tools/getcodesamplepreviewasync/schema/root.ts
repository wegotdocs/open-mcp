import { z } from "zod"

export const inputParamsSchema = {
  "jobID": z.string().describe("The ID of the job to check the status and retrieve results")
}