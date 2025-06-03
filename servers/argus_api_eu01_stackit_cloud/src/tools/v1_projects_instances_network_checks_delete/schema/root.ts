import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string(),
  "instanceId": z.string(),
  "projectId": z.string(),
  "Authorization": z.string().describe("Accepts api gateway access.")
}