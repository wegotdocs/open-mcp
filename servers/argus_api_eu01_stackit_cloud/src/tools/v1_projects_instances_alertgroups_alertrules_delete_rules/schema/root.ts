import { z } from "zod"

export const inputParamsSchema = {
  "alertName": z.string(),
  "groupName": z.string(),
  "instanceId": z.string(),
  "projectId": z.string(),
  "Authorization": z.string().describe("Accepts technical credentials and api gateway access.")
}