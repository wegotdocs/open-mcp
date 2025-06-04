import { z } from "zod"

export const inputParamsSchema = {
  "holidayCalendarId": z.string().uuid().describe("Holiday Calendar Id"),
  "name": z.string().describe("The name of the holidays"),
  "daysOff": z.array(z.object({ "name": z.string().optional(), "date": z.string().optional() }))
}