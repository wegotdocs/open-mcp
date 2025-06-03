import { z } from "zod"

export const inputParamsSchema = {
  "instanceId": z.string(),
  "projectId": z.string(),
  "jobName": z.array(z.string()).describe("Name of the jobs that should be deleted"),
  "Authorization": z.string().describe("Accepts technical credentials and api gateway access.")
}