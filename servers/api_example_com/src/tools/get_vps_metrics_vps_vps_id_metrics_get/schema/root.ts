import { z } from "zod"

export const inputParamsSchema = {
  "vps_id": z.number().int(),
  "metrics": z.union([z.string(), z.null()]).describe("Comma-separated metrics").optional(),
  "time_range": z.union([z.string(), z.null()]).describe("Time range like 1h, 7d, etc.").optional()
}