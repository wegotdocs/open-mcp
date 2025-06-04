import { z } from "zod"

export const inputParamsSchema = {
  "employeeId": z.string().uuid(),
  "workEntryType": z.enum(["work","pause"]),
  "workBreakId": z.string().uuid().optional(),
  "workCheckTypeId": z.string().uuid().optional(),
  "workEntryIn": z.any(),
  "workEntryOut": z.any().optional()
}