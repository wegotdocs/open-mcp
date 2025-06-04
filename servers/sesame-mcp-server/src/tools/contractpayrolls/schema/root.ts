import { z } from "zod"

export const inputParamsSchema = {
  "period": z.enum(["daily","weekly","biweekly","fortnightly","monthly"]).describe("Salary pay period"),
  "from": z.string().date().describe("Y-m-d"),
  "to": z.string().date().describe("Y-m-d"),
  "currency": z.enum(["EUR","MXN","USD"]).describe("Salary currency"),
  "officeIds[in]": z.array(z.string().uuid()).describe("Office Ids to filter employees belonging to them").optional(),
  "departmentIds[in]": z.array(z.string().uuid()).describe("Department Ids to filter employees belonging to them").optional(),
  "employeeStatus[in]": z.array(z.enum(["active","inactive"])).describe("Employee status").optional(),
  "limit": z.number().int().describe("Limit custom fields").optional(),
  "page": z.number().int().describe("Request a specific page").optional(),
  "orderBy": z.string().describe("firstName asc").optional()
}