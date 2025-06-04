import { z } from "zod"

export const inputParamsSchema = {
  "employeeId": z.string().uuid(),
  "projectId": z.string().uuid().optional(),
  "tagIds": z.array(z.string().uuid()).optional(),
  "comment": z.string().optional(),
  "timeEntryIn": z.any(),
  "timeEntryOut": z.any().optional()
}