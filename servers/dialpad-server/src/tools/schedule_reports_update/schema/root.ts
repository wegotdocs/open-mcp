import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("The schedule reports subscription's ID."),
  "at": z.number().int().nullable().describe("Hour of the day when the report will execute considering the frequency and timezones between 0 and 23  e.g. 10 will be 10:00 am."),
  "coaching_group": z.boolean().nullable().describe("Whether the the statistics should be for trainees of the coach group with the given target_id.").optional(),
  "enabled": z.boolean().nullable().describe("Whether or not this schedule reports event subscription is enabled.").optional(),
  "endpoint_id": z.number().int().nullable().describe("The logging endpoint's ID, which is generated after creating a webhook or websocket successfully."),
  "frequency": z.enum(["daily","monthly","weekly"]).nullable().describe("How often the report will execute."),
  "name": z.string().nullable().describe("[single-line only]\n\nThe name of the schedule reports."),
  "on_day": z.number().int().nullable().describe("The day of the week or month when the report will execute considering the frequency. daily=0, weekly=0-6, monthly=0-30."),
  "report_type": z.enum(["call_logs","daily_statistics","recordings","user_statistics","voicemails"]).nullable().describe("The type of report that will be generated."),
  "target_id": z.number().int().nullable().describe("The target's id.").optional(),
  "target_type": z.enum(["callcenter","callrouter","channel","coachinggroup","coachingteam","department","office","room","staffgroup","unknown","user"]).nullable().describe("Target's type.").optional(),
  "timezone": z.string().nullable().describe("Timezone using a tz database name.").optional()
}