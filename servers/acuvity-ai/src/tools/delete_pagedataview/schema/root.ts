import { z } from "zod"

export const inputParamsSchema = {
  "q": z.string().describe("This is an example.").optional()
}