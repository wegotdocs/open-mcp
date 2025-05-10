import { z } from "zod"

export const inputParamsSchema = {
  "employee_id": z.string().nullable().describe("The employee ID").optional(),
  "approver_id": z.string().nullable().describe("The approver ID").optional(),
  "status": z.string().optional(),
  "start_date": z.string().datetime({ offset: true }).nullable().describe("The start date of the time off request").optional(),
  "end_date": z.string().datetime({ offset: true }).nullable().describe("The end date of the time off request").optional(),
  "start_half_day": z.boolean().nullable().describe("True if the start of the time off request begins half way through the day").optional(),
  "end_half_day": z.boolean().nullable().describe("True if the end of the time off request ends half way through the day").optional(),
  "time_off_policy_id": z.string().nullable().describe("The time off policy id associated with this time off request").optional(),
  "reason": z.string().optional(),
  "passthrough": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `passthrough` to the tool, first call the tool `expandSchema` with \"/properties/passthrough\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Value to pass through to the provider</property-description>").optional(),
  "x-account-id": z.string().describe("The account identifier")
}