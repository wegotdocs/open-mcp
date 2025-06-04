import { z } from "zod"

export const inputParamsSchema = {
  "employeeId": z.string().uuid().describe("The ID of the employee"),
  "payPeriod": z.enum(["daily","weekly","biweekly","monthly","yearly"]).describe("Payment period of contract"),
  "currency": z.string().describe("Currency of contract"),
  "grossSalary": z.number().describe("Salary amount"),
  "payments": z.number().int().describe("Number of payments"),
  "contributionGroupId": z.string().uuid().describe("Contribution group id"),
  "startDate": z.string().date().describe("Salary start date"),
  "endDate": z.string().date().describe("Salary end date").optional(),
  "comments": z.string().describe("Comments").optional(),
  "prorated": z.boolean().describe("Defines whether the salary is prorated or not")
}