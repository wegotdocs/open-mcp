import { z } from "zod"

export const inputParamsSchema = {
  "time_window": z.string().describe("Time window for leaderboard").optional()
}