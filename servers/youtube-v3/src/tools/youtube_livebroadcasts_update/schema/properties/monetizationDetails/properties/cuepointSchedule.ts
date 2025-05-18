import { z } from "zod"

export const inputParamsSchema = {
  "enabled": z.boolean().describe("This field is semantically required. If it is set false or not set, other fields in this message will be ignored.").optional(),
  "pauseAdsUntil": z.string().describe("If set, automatic cuepoint insertion is paused until this timestamp (\"No Ad Zone\"). The value is specified in ISO 8601 format.").optional(),
  "repeatIntervalSecs": z.number().int().describe("Interval frequency in seconds that api uses to insert cuepoints automatically.").optional(),
  "scheduleStrategy": z.enum(["scheduleStrategyUnspecified","concurrent","nonConcurrent"]).describe("The strategy to use when scheduling cuepoints.").optional()
}