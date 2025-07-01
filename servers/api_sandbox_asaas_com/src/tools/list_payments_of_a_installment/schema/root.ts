import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique installment identifier in Asaas"),
  "status": z.enum(["PENDING","RECEIVED","CONFIRMED","OVERDUE","REFUNDED","RECEIVED_IN_CASH","REFUND_REQUESTED","REFUND_IN_PROGRESS","CHARGEBACK_REQUESTED","CHARGEBACK_DISPUTE","AWAITING_CHARGEBACK_REVERSAL","DUNNING_REQUESTED","DUNNING_RECEIVED","AWAITING_RISK_ANALYSIS"]).describe("Filter by payment status").optional()
}