import { z } from "zod"

export const inputParamsSchema = {
  "location": z.string().describe("2 character continent code.")
}