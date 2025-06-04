import { z } from "zod"

export const inputParamsSchema = {
  "agreementId": z.string().uuid().describe("Agreement UUID"),
  "employeeId": z.string().uuid().describe("Employee UUID"),
  "startDate": z.string().date().describe("Start date")
}