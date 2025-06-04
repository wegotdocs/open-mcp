import { z } from "zod"

export const inputParamsSchema = {
  "employeeId": z.string().uuid().describe("The identifier of the employee"),
  "departmentId": z.string().uuid().describe("The identifier of the department")
}