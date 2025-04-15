import { z } from "zod"

export const inputParamsSchema = {
  "client_id": z.string().describe("Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.").optional(),
  "originator_client_id": z.string().nullable().describe("Client ID of the customer that owns the Ledger balance. This is so Plaid knows which of your customers to payout or collect funds. Only applicable for [Platform customers](https://plaid.com/docs/transfer/application/#originators-vs-platforms). Do not include if you’re paying out to yourself.").optional(),
  "funding_account_id": z.string().nullable().describe("Specify which funding account to use. Customers can find a list of `funding_account_id`s in the Accounts page of the Plaid Dashboard, under the \"Account ID\" column. If this field is left blank, the funding account associated with the specified Ledger will be used. If an `originator_client_id` is specified, the `funding_account_id` must belong to the specified originator.").optional(),
  "ledger_id": z.string().nullable().describe("Specify which ledger balance to withdraw from. Customers can find a list of `ledger_id`s in the Accounts page of your Plaid Dashboard. If this field is left blank, this will default to id of the default ledger balance.").optional(),
  "amount": z.string().describe("A positive amount of how much will be withdrawn from the ledger balance (decimal string with two digits of precision e.g. \"5.50\")."),
  "description": z.string().max(10).nullable().describe("The description of the deposit that will be passed to the receiving bank (up to 10 characters). Note that banks utilize this field differently, and may or may not show it on the bank statement.").optional(),
  "idempotency_key": z.string().max(50).describe("A unique key provided by the client, per unique ledger withdraw. Maximum of 50 characters.\n\nThe API supports idempotency for safely retrying the request without accidentally performing the same operation twice. For example, if a request to create a ledger withdraw fails due to a network connection error, you can retry the request with the same idempotency key to guarantee that only a single withdraw is created."),
  "network": z.enum(["ach","same-day-ach","rtp","wire"]).describe("The network or rails used for the transfer.\n\nFor transfers submitted as `ach`, the next-day cutoff is 8:30 PM Eastern Time.\n\nFor transfers submitted as `same-day-ach`, the same-day cutoff is 3:30 PM Eastern Time. If the transfer is submitted after this cutoff but before the next-day cutoff, it will be sent over next-day rails and will not incur same-day charges; this will apply to both legs of the transfer if applicable.\n\nFor transfers submitted as `rtp`,  Plaid will automatically route between Real Time Payment rail by TCH or FedNow rails as necessary. If a transfer is submitted as `rtp` and the counterparty account is not eligible for RTP, the `/transfer/authorization/create` request will fail with an `INVALID_FIELD` error code. To pre-check to determine whether a counterparty account can support RTP, call `/transfer/capabilities/get` before calling `/transfer/authorization/create`.\n\nWire transfers are currently in early availability. To request access to `wire` as a payment network, contact your Account Manager. For transfers submitted as `wire`, the `type` must be `credit`; wire debits are not supported. The cutoff to submit a wire payment is 4:30 PM Eastern Time on a business day; wires submitted after that time will be processed on the next business day. The transaction limit for a wire is $999,999.99. Authorization requests sent with an amount greater than $999,999.99 will fail.")
}