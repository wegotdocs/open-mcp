import { z } from "zod"

export const inputParamsSchema = {
  "employeeId": z.string().uuid().describe("The ID of the employee"),
  "startAt": z.string().date().describe("Start date of contract"),
  "endAt": z.string().date().describe("end date of contract").optional(),
  "code": z.string().describe("Code of the contract").optional(),
  "comment": z.string().describe("Comments").optional(),
  "jobChargeId": z.string().uuid().describe("The ID of the job charge").optional(),
  "contractTypeId": z.string().uuid().describe("The ID of the agreement").optional(),
  "agreementId": z.string().uuid().describe("The ID of the agreement").optional(),
  "degreeId": z.string().uuid().describe("The ID of the degree").optional(),
  "workDayTypeId": z.string().uuid().describe("The ID of the work type").optional(),
  "socialSecurityNumber": z.string().describe("The social security number").optional(),
  "trialPeriod": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `trialPeriod` to the tool, first call the tool `expandSchema` with \"/properties/trialPeriod\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "cbo": z.string().regex(new RegExp("^\\d{4}(-\\d{2})?$")).optional(),
  "remoteWork": z.boolean().describe("Remote work").optional(),
  "seniorityDate": z.string().date().describe("Seniority date").optional(),
  "jobLevel": z.string().uuid().describe("The job level").optional(),
  "jobPositionDescription": z.string().describe("The job position description").optional(),
  "weeklyHours": z.number().describe("Weekly working hours").optional(),
  "maxLegalWeeklyHours": z.number().describe("Max legal weekly working hours").optional(),
  "maxLegalAnnualHours": z.number().describe("Max legal annual working hours").optional(),
  "percentageWorkDay": z.number().describe("Percentage of workday").optional(),
  "fte": z.number().describe("The FTE value should be between 0 and 1").optional(),
  "workDays": z.array(z.object({ "day": z.enum(["monday","tuesday","wednesday","thursday","friday","saturday","sunday"]).describe("Day of the week"), "hour": z.number().describe("Total hour to work in the day") })).optional()
}