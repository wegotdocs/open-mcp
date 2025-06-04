import { z } from "zod"

export const inputParamsSchema = {
  "employeeId": z.string().uuid(),
  "workEntryIn": z.any().optional(),
  "workCheckTypeId": z.string().uuid().nullable().optional(),
  "workBreakId": z.string().uuid().nullable().optional()
}