import { z } from "zod"

export const inputParamsSchema = {
  "email": z.string(),
  "time_window": z.string().describe("Time window for user stats").optional()
}