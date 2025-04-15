import { z } from "zod"

export const inputParamsSchema = {
  "client_id": z.string().describe("Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.").optional(),
  "client_transaction_id": z.string().min(1).max(36).describe("Must be the same as the `client_transaction_id` supplied when calling `/signal/evaluate`"),
  "initiated": z.boolean().describe("`true` if the ACH transaction was initiated, `false` otherwise.\n\nThis field must be returned as a boolean. If formatted incorrectly, this will result in an [`INVALID_FIELD`](/docs/errors/invalid-request/#invalid_field) error."),
  "days_funds_on_hold": z.number().int().gte(0).nullable().describe("The actual number of days (hold time) since the ACH debit transaction that you wait before making funds available to your customers. The holding time could affect the ACH return rate.\n\nFor example, use 0 if you make funds available to your customers instantly or the same day following the debit transaction, or 1 if you make funds available the next day following the debit initialization.").optional(),
  "decision_outcome": z.enum(["APPROVE","REVIEW","REJECT","TAKE_OTHER_RISK_MEASURES","NOT_EVALUATED"]).nullable().describe("The payment decision from the risk assessment.\n\n`APPROVE`: approve the transaction without requiring further actions from your customers. For example, use this field if you are placing a standard hold for all the approved transactions before making funds available to your customers. You should also use this field if you decide to accelerate the fund availability for your customers.\n\n`REVIEW`: the transaction requires manual review\n\n`REJECT`: reject the transaction\n\n`TAKE_OTHER_RISK_MEASURES`: for example, placing a longer hold on funds than those approved transactions or introducing customer frictions such as step-up verification/authentication\n\n`NOT_EVALUATED`: if only logging the Signal results without using them\n\nPossible values:  `APPROVE`, `REVIEW`, `REJECT`, `TAKE_OTHER_RISK_MEASURES`, `NOT_EVALUATED`\n").optional(),
  "payment_method": z.enum(["SAME_DAY_ACH","NEXT_DAY_ACH","STANDARD_ACH","REAL_TIME_PAYMENTS","DEBIT_CARD","MULTIPLE_PAYMENT_METHODS"]).nullable().describe("The payment method to complete the transaction after the risk assessment. It may be different from the default payment method.\n\n`SAME_DAY_ACH`: Same Day ACH by NACHA. The debit transaction is processed and settled on the same day\n\n`NEXT_DAY_ACH`: Next Day ACH settlement for debit transactions, offered by some payment processors\n\n`STANDARD_ACH`: standard ACH by NACHA\n\n`REAL_TIME_PAYMENTS`: real-time payments such as RTP and FedNow\n\n`DEBIT_CARD`: if the default payment is over debit card networks\n\n`MULTIPLE_PAYMENT_METHODS`: if there is no default debit rail or there are multiple payment methods\n\nPossible values: `SAME_DAY_ACH`, `NEXT_DAY_ACH`, `STANDARD_ACH`, `REAL_TIME_PAYMENTS`, `DEBIT_CARD`, `MULTIPLE_PAYMENT_METHODS`\n").optional(),
  "amount_instantly_available": z.number().nullable().describe("The amount (in USD) made available to your customers instantly following the debit transaction. It could be a partial amount of the requested transaction (example: 102.05).").optional(),
  "submitted_at": z.string().datetime({ offset: true }).describe("The date the ACH debit was submitted to the bank for processing (in ISO 8601 format: `YYYY-MM-DDTHH:mm:ssZ`). This field should correspond to the attempt initiated after the `/signal/schedule` call.").optional()
}