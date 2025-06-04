import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().uuid().describe("Calendar ID"),
  "daysOff": z.array(z.object({ "date": z.string().optional() })).describe("array of VacationCalendarDayOff").optional(),
  "maxDaysOff": z.number().int().describe("This limit will have priority over the Vacation Configuration maxDaysOff limit").optional()
}