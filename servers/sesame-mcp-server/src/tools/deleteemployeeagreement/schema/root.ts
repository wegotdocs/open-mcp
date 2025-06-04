import { z } from "zod"

export const inputParamsSchema = {
  "agreementEmployeeId": z.string().uuid().describe("Employee agreement UUID")
}