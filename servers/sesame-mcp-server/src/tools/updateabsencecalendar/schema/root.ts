import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().uuid().describe("Calendar ID"),
  "daysOff": z.array(z.object({ "date": z.string().date().optional(), "startTime": z.string().optional(), "endTime": z.string().optional() })).describe("array of AbsenceCalendarDayOff")
}