import { z } from "zod"

export const inputParamsSchema = {
  "projectId": z.string(),
  "Authorization": z.string().describe("Accepts technical api gateway access.")
}