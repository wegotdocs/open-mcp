import { z } from "zod"

export const inputParamsSchema = {
  "wakeup": z.boolean().describe("If set to false, the channel will not launch").optional()
}