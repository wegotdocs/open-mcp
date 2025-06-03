import { z } from "zod"

export const inputParamsSchema = {
  "instanceId": z.string(),
  "projectId": z.string(),
  "source": z.string().max(200).describe("cert to check"),
  "Authorization": z.string().describe("Accepts api gateway access.")
}