import { z } from "zod"

export const inputParamsSchema = {
  "vacationConfigurationId": z.string().uuid().describe("Vacation Configuration ID"),
  "name": z.string(),
  "requestVacationFrom": z.string().optional(),
  "renewalPeriod": z.enum(["working_year","calendar_year","each_month"]).optional(),
  "dayType": z.enum(["business_day","calendar_day"]),
  "maxDaysOff": z.number().optional(),
  "creationDateNextYear": z.string(),
  "maxDateToTakeVacations": z.number().optional(),
  "needsValidation": z.boolean(),
  "employeeRequestDenyExcessDaysOff": z.boolean(),
  "hoursQuantityConfigured": z.boolean(),
  "halfDayVacationConfiguration": z.enum(["weekly_average","daily_average"]).optional(),
  "allowFreeHoursSelection": z.boolean(),
  "enjoyMonthPeriod": z.number().optional(),
  "employeeRequestEnabled": z.boolean(),
  "notAllowedDateRanges": z.array(z.object({ "from": z.string().optional(), "to": z.string().optional() })).optional(),
  "configurationType": z.enum(["max_days","seniority_days","unlimited_days"]),
  "year": z.number().optional()
}