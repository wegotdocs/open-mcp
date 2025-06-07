import { z } from "zod"

export const inputParamsSchema = {
  "env_name": z.string(),
  "min_healthy_percentage": z.number().int().describe("Minimum percentage of healthy instances during refresh").optional(),
  "instance_warmup": z.number().int().describe("Instance warmup time in seconds").optional(),
  "preferences": z.union([z.record(z.any()), z.null()]).describe("Additional preferences for the refresh operation").optional()
}