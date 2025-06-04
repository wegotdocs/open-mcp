import { z } from "zod"

export const inputParamsSchema = {
  "jobChargeId": z.string().uuid().describe("Job Charge ID"),
  "name": z.string().describe("name of the job charge")
}