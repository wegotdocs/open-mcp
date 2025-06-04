import { z } from "zod"

export const inputParamsSchema = {
  "salaryId": z.string().uuid().describe("Salary ID")
}