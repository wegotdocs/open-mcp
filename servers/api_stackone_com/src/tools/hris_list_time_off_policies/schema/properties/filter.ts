import { z } from "zod"

export const inputParamsSchema = {
  "updated_after": z.string().nullable().describe("Use a string with a date to only select results updated after that given date").optional(),
  "type": z.union([z.literal("sick"), z.literal("unmapped_value"), z.literal("vacation"), z.literal("long_term_disability"), z.literal("short_term_disability"), z.literal("absent"), z.literal("comp_time"), z.literal("training"), z.literal("annual_leave"), z.literal("leave_of_absence"), z.literal("break"), z.literal("child_care_leave"), z.literal("maternity_leave"), z.literal("jury_duty"), z.literal("bereavement_leave"), z.literal("sabbatical"), z.literal("accident"), z.literal(null)]).nullable().describe("Filter to select time-off policies by type").optional()
}