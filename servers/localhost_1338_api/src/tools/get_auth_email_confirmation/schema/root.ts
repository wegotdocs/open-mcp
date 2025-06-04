import { z } from "zod"

export const inputParamsSchema = {
  "confirmation": z.string().describe("confirmation token received by email").optional()
}