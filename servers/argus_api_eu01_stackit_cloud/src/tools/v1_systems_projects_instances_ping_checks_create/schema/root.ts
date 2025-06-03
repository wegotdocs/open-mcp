import { z } from "zod"

export const inputParamsSchema = {
  "instanceId": z.string(),
  "projectId": z.string(),
  "url": z.string().max(200).describe("domain to check"),
  "Authorization": z.string().describe("Accepts api gateway access.")
}