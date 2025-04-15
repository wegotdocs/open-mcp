import { z } from "zod"

export const inputParamsSchema = {
  "isReturningKeys": z.boolean().describe("Return issue keys instead of issue ids in the response.\n\nUsage: Add `?isReturningKeys=true` to the end of the path to request issue keys.").optional()
}