import { z } from "zod"

export const inputParamsSchema = {
  "employee_id": z.number().int().describe("Numeric `id` of the employee")
}