import { z } from "zod"

export const inputParamsSchema = {
  "instanceId": z.string(),
  "projectId": z.string(),
  "address": z.string().max(400).describe("network to check"),
  "Authorization": z.string().describe("Accepts api gateway access.")
}