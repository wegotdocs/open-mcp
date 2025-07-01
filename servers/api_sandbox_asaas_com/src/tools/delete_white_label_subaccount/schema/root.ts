import { z } from "zod"

export const inputParamsSchema = {
  "removeReason": z.string().describe("Reason for removal").optional()
}