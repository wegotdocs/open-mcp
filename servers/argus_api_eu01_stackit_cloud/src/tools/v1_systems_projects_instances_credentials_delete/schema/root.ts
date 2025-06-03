import { z } from "zod"

export const inputParamsSchema = {
  "instanceId": z.string(),
  "projectId": z.string(),
  "username": z.string(),
  "Authorization": z.string().describe("Accepts system permission.")
}