import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().describe("Business ID"),
  "b_business_id": z.string().optional(),
  "expense_accounts": z.array(z.object({ "id": z.string().optional(), "type": z.string().optional(), "account": z.string().optional(), "name": z.string().optional(), "discount": z.number().optional(), "counterpart": z.string().optional() })).optional(),
  "limit_char_expense_account": z.number().int().optional(),
  "limit_char_accounting_account": z.number().int().optional()
}