import { z } from "zod"

export const inputParamsSchema = {
  "projectId": z.string(),
  "Authorization": z.string().describe("Accepts api gateway access.")
}