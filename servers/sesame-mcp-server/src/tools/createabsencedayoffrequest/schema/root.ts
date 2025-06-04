import { z } from "zod"

export const inputParamsSchema = {
  "employeeId": z.string().uuid(),
  "absenceTypeId": z.string().uuid().optional(),
  "type": z.enum(["create","delete"]),
  "daysOff": z.array(z.object({ "date": z.string().date().optional(), "startTime": z.string().optional(), "endTime": z.string().optional() })),
  "comment": z.string().optional()
}