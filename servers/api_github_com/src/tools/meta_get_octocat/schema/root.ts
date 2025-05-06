import { z } from "zod"

export const inputParamsSchema = {
  "s": z.string().describe("The words to show in Octocat's speech bubble").optional()
}