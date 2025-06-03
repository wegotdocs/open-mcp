import { z } from "zod"

export const inputParamsSchema = {
  "skipIfRuleNotChanged": z.boolean().describe("Whether scheduled Runtime Secret Scans will be skipped. If true, scheduled Runtime Secret Scans of the container image are skipped when the rule has not changed.").optional(),
  "cron": z.string().regex(new RegExp("^([0-5]?\\d)\\s([01]?\\d|2[0-3])\\s\\*\\s\\*\\s(\\*|([0-6](,[0-6])*)?)$")).max(23).describe("The cron expression for the scheduled scan based on UTC. Only daily and weekly schedules are currently supported.  ")
}