import { z } from "zod"

export const inputParamsSchema = {
  "salaryId": z.string().uuid().describe("Salary ID"),
  "endDate": z.string().date().describe("End date of salary").optional(),
  "comments": z.string().describe("Comments").optional()
}