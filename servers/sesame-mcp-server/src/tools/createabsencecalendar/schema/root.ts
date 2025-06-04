import { z } from "zod"

export const inputParamsSchema = {
  "employeeId": z.string().uuid(),
  "absenceTypeId": z.string().uuid(),
  "year": z.number().int(),
  "daysOff": z.array(z.object({ "date": z.string().date().optional(), "startTime": z.string().optional(), "endTime": z.string().optional() })).describe("array of AbsenceCalendarDayOff")
}