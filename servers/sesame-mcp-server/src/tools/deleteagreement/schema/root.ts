import { z } from "zod"

export const inputParamsSchema = {
  "agreementId": z.string().uuid().describe("Agreement UUID")
}