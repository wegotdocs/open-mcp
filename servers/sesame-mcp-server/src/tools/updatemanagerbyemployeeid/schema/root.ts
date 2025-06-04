import { z } from "zod"

export const inputParamsSchema = {
  "employeeId": z.string().uuid().describe("Employee ID"),
  "organizationChartManagerId": z.string().uuid().describe("The identifier of the organization chart manager")
}