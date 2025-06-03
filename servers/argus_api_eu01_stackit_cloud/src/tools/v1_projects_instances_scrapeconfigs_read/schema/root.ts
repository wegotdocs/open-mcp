import { z } from "zod"

export const inputParamsSchema = {
  "instanceId": z.string(),
  "jobName": z.string(),
  "projectId": z.string(),
  "Authorization": z.string().describe("Accepts technical credentials and api gateway access.")
}