import { z } from "zod"

export const inputParamsSchema = {
  "namespace": z.string(),
  "duration": z.string().describe("Time duration for rate calculation (e.g., 5m, 1h)").optional()
}