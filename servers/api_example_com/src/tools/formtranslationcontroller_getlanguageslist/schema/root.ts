import { z } from "zod"

export const inputParamsSchema = {
  "lang": z.string(),
  "Authorization": z.string().describe("Bearer User Auth Token")
}