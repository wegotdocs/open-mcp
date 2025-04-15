import { z } from "zod"

export const inputParamsSchema = {
  "key": z.string().describe("The key of the preference.")
}