import { z } from "zod"

export const inputParamsSchema = {
  "employeeId": z.string().uuid(),
  "workEntryOut": z.any().optional()
}