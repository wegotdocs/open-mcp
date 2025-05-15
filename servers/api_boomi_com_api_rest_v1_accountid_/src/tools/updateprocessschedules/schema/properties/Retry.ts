import { z } from "zod"

export const inputParamsSchema = {
  "Schedule": z.array(z.object({ "daysOfMonth": z.string().describe("1 is the first day of the month and 31 is the last day of the month.").optional(), "daysOfWeek": z.string().describe("1 is Sunday and 7 is Saturday.").optional(), "hours": z.string().describe("Uses a 24-hour clock. 0 is midnight and 12 is noon.").optional(), "minutes": z.string().describe("0 is the first minute of the hour — for example, 1:00 A.M.59 is the last minute of the hour — for example, 1:59 A.M.").optional(), "months": z.string().describe("1 is January and 12 is December. In most cases this is set to an asterisk [*].").optional(), "years": z.string().describe("The standard year format. In most cases this is set to an asterisk [*].").optional() })).optional(),
  "maxRetry": z.number().int().describe("(Retry schedules only) The maximum number of retries. The minimum valid value is 1; the maximum is 5.").optional()
}