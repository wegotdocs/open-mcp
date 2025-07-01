import { z } from "zod"

export const inputParamsSchema = {
  "offset": z.number().int().describe("List starting element").optional(),
  "limit": z.number().int().lte(100).describe("Number of list elements (max: 100)").optional(),
  "status": z.enum(["AWAITING_BALANCE_VALIDATION","AWAITING_INSTANT_PAYMENT_ACCOUNT_BALANCE","AWAITING_CRITICAL_ACTION_AUTHORIZATION","AWAITING_CHECKOUT_RISK_ANALYSIS_REQUEST","AWAITING_CASH_IN_RISK_ANALYSIS_REQUEST","SCHEDULED","AWAITING_REQUEST","REQUESTED","DONE","REFUSED","CANCELLED"]).describe("Filter by transaction status").optional(),
  "type": z.enum(["DEBIT","CREDIT","CREDIT_REFUND","DEBIT_REFUND","DEBIT_REFUND_CANCELLATION"]).describe("Filter by transaction type").optional(),
  "endToEndIdentifier": z.string().describe("Filter by Pix transaction identifier at the Central Bank").optional()
}