import { z } from "zod"

export const inputParamsSchema = {
  "credit_limit": z.number().int().gte(1).describe("Credit Limit. Used for tracking usage").optional(),
  "alert_threshold": z.number().int().gte(1).describe("Alert Threshold. Used for alerting when usage reaches more than this").optional(),
  "periodic_reset": z.literal("monthly").describe("Reset the usage periodically.").optional()
}