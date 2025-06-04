import { z } from "zod"

export const inputParamsSchema = {
  "agreementId": z.string().uuid().describe("Agreement UUID"),
  "name": z.string().describe("Agreement name"),
  "code": z.string().describe("Agreement code"),
  "color": z.string().describe("Color of agreement"),
  "annualHours": z.number().describe("Annual hours")
}