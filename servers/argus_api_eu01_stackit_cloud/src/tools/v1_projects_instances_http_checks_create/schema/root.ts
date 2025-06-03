import { z } from "zod"

export const inputParamsSchema = {
  "instanceId": z.string(),
  "projectId": z.string(),
  "url": z.string().max(400).describe("url to check"),
  "Authorization": z.string().describe("Accepts api gateway access.")
}