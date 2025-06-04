import { z } from "zod"

export const inputParamsSchema = {
  "employeeId": z.string().uuid().optional()
}