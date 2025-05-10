import { z } from "zod"

export const inputParamsSchema = {
  "domain": z.string().describe("The domain to look for.").optional(),
  "q": z.string().describe("This is an example.").optional()
}