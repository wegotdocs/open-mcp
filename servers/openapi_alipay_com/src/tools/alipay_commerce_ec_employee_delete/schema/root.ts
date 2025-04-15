import { z } from "zod"

export const inputParams = {
  "employee_id": z.string().describe("员工id").optional(),
  "enterprise_id": z.string().describe("企业id").optional()
}