import { z } from "zod"

export const inputParamsSchema = {
  "key": z.string().describe("The project key.").optional()
}