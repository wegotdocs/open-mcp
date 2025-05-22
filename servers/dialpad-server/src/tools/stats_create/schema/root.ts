import { z } from "zod"

export const inputParamsSchema = {
  "coaching_group": z.boolean().nullable().describe("Whether or not the the statistics should be for trainees of the coach group with the given target_id.").optional(),
  "coaching_team": z.boolean().nullable().describe("Whether or not the the statistics should be for trainees of the coach team with the given target_id.").optional(),
  "days_ago_end": z.number().int().nullable().describe("End of the date range to get statistics for.\n\nThis is the number of days to look back relative to the current day. Used in conjunction with days_ago_start to specify a range.").optional(),
  "days_ago_start": z.number().int().nullable().describe("Start of the date range to get statistics for.\n\nThis is the number of days to look back relative to the current day. Used in conjunction with days_ago_end to specify a range.").optional(),
  "export_type": z.enum(["records","stats"]).nullable().describe("Whether to return aggregated statistics (stats), or individual rows for each record (records).\n\nNOTE: For stat_type \"csat\" or \"dispositions\", only \"records\" is supported."),
  "group_by": z.enum(["date","group","user"]).nullable().describe("This param is only applicable when the stat_type is specified as call. For call stats, group calls by user per day (default), get total metrics by day, or break down by department and call center (office only).").optional(),
  "is_today": z.boolean().nullable().describe("Whether or not the statistics are for the current day.\n\nNOTE: days_ago_start and days_ago_end are ignored if this is passed in.").optional(),
  "office_id": z.number().int().nullable().describe("ID of the office to get statistics for.\n\nIf a target_id and target_type are passed in this value is ignored and instead the target is used.").optional(),
  "stat_type": z.enum(["calls","csat","dispositions","onduty","recordings","screenshare","texts","voicemails"]).nullable().describe("The type of statistics to be returned.\n\nNOTE: if the value is \"csat\" or \"dispositions\", target_id and target_type must be specified."),
  "target_id": z.number().int().nullable().describe("The target's id.").optional(),
  "target_type": z.enum(["callcenter","coachinggroup","coachingteam","department","office","room","staffgroup","unknown","user"]).nullable().describe("Target's type.").optional(),
  "timezone": z.string().nullable().describe("Timezone using a tz database name.").optional()
}