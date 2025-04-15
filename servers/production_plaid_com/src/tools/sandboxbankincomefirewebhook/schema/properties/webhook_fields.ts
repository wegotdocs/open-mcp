import { z } from "zod"

export const inputParamsSchema = {
  "user_id": z.string().describe("The user id to be returned in INCOME webhooks"),
  "bank_income_refresh_complete_result": z.enum(["SUCCESS","FAILURE"]).describe("The result of the bank income refresh report generation\n\n`SUCCESS`: The refreshed report was successfully generated and can be retrieved via `/credit/bank_income/get`.\n\n`FAILURE`: The refreshed report failed to be generated").optional()
}