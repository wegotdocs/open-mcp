import { z } from "zod"

export const inputParamsSchema = {
  "employeeId": z.string().uuid().describe("Employee ID"),
  "salaryId": z.string().uuid().describe("Salary ID").optional(),
  "payPeriod": z.enum(["daily","weekly","biweekly","monthly","yearly"]).describe("Pay Period").optional(),
  "grossSalary": z.number().int().describe("Gross Salary").optional(),
  "payments": z.number().int().describe("Payments").optional(),
  "contributionGroup": z.string().describe("Contribution Group").optional(),
  "startDate": z.string().date().describe("Start Date").optional(),
  "endDate": z.string().date().describe("End Date").optional(),
  "limit": z.number().int().describe("Limit results").optional(),
  "page": z.number().int().describe("Request a specific page").optional()
}