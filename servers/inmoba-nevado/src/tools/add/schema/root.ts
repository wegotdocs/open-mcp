import { z } from "zod"

export const inputParamsSchema = {
  "activityId": z.number().int(),
  "startDateTime": z.string().datetime({ offset: true }).nullable().describe("Required if allDay is false").optional(),
  "endDateTime": z.string().datetime({ offset: true }).nullable().describe("Required if allDay is false").optional(),
  "startDate": z.string().date().nullable().describe("Required if allDay is true").optional(),
  "endDate": z.string().date().nullable().describe("Required if allDay is true").optional(),
  "timezone": z.string(),
  "allDay": z.boolean(),
  "reminder": z.enum(["MINUTES_30","HOUR_1","HOURS_2","DAY_1","DAYS_3","DAYS_7","DAYS_15","DAYS_30"]).nullable().optional(),
  "description": z.string().nullable().optional()
}