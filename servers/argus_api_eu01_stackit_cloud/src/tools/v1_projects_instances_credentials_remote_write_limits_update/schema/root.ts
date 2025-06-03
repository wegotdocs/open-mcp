import { z } from "zod"

export const inputParamsSchema = {
  "instanceId": z.string(),
  "projectId": z.string(),
  "username": z.string(),
  "maxLimit": z.number().describe("Remote write metric sample limit for credential to push in a single minute.").optional(),
  "Authorization": z.string().describe("Accepts technical credentials and api gateway access.")
}