import { z } from "zod"

export const inputParamsSchema = {
  "value": z.string().describe("Value of the customer memo.").optional()
}