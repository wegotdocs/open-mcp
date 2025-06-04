import { z } from "zod"

export const inputParamsSchema = {
  "employeeId": z.string().uuid(),
  "calendarId": z.string().uuid(),
  "type": z.enum(["create","delete"]),
  "daysOff": z.array(z.object({ "date": z.string().date().optional() })),
  "comment": z.string().optional(),
  "onlyWithSchedule": z.boolean().optional()
}