import { z } from "zod"

export const inputParamsSchema = {
  "instanceId": z.string(),
  "projectId": z.string(),
  "retention": z.string().min(2).max(8).describe("How long to keep the logs\n`Additional Validators:`\n* Should be a valid time string\n* Should not be longer than 30 days"),
  "Authorization": z.string().describe("Accepts technical credentials and api gateway access.")
}