import { z } from "zod"

export const inputParamsSchema = {
  "allow_queuing": z.boolean().nullable().describe("Whether or not send callers to a hold queue, if all operators are busy on other calls. Default is False.").optional(),
  "max_hold_count": z.number().int().nullable().describe("If all operators are busy on other calls, send callers to a hold queue. This is to specify your queue size. Choose from 1-50. Default is 50.").optional(),
  "max_hold_seconds": z.number().int().nullable().describe("Maximum queue wait time in seconds. Choose from 30s to 18000s (3 hours). Default is 900s (15 min).").optional()
}