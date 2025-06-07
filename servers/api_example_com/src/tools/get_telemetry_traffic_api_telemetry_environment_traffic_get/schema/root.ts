import { z } from "zod"

export const inputParamsSchema = {
  "environment": z.string(),
  "duration": z.string().describe("Time duration (e.g., 5m, 1h, 24h)").optional()
}