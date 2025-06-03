import { z } from "zod"

export const inputParamsSchema = {
  "description": z.string().describe("Description of the transaction rule."),
  "categoryId": z.string().describe("Identifier of the category"),
  "transactionType": z.string().describe("Transaction type (DEBIT/CREDIT)").optional(),
  "accountType": z.string().describe("Account type (CHECKING_ACCOUNT/CREDIT_CARD)").optional(),
  "matchType": z.string().describe("Type of match used to identify the rule (exact/contains/startsWith/endsWith), if not provided, defaults to 'exact'").optional()
}