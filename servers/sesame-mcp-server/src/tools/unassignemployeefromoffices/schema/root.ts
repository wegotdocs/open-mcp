import { z } from "zod"

export const inputParamsSchema = {
  "employeeId": z.string().uuid().describe("The identifier of the employee"),
  "officeId": z.string().uuid().describe("The identifier of the office")
}