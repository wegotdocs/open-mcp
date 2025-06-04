import { z } from "zod"

export const inputParamsSchema = {
  "employeeId": z.string().uuid(),
  "vacationConfigurationId": z.string().uuid(),
  "year": z.number().int(),
  "daysOff": z.array(z.object({ "date": z.string().date().optional() })).describe("array of VacationCalendarDayOff")
}