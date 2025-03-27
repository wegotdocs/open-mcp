import { z } from "zod"

export const toolName = `list_events`
export const toolDescription = `List Events`
export const baseUrl = `https://api.increase.com`
export const path = `/events`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]

export const inputParams = z.object({ "query": z.object({ "cursor": z.string().describe("Return the page of entries after this one.").optional(), "limit": z.number().int().gte(0).describe("Limit the size of the list that is returned. The default (and maximum) is 100 objects.").optional(), "created_at.after": z.string().datetime({ offset: true }).describe("Return results after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) timestamp.").optional(), "created_at.before": z.string().datetime({ offset: true }).describe("Return results before this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) timestamp.").optional(), "created_at.on_or_after": z.string().datetime({ offset: true }).describe("Return results on or after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) timestamp.").optional(), "created_at.on_or_before": z.string().datetime({ offset: true }).describe("Return results on or before this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) timestamp.").optional(), "category.in": z.array(z.enum(["account.created","account.updated","account_number.created","account_number.updated","account_statement.created","account_transfer.created","account_transfer.updated","ach_prenotification.created","ach_prenotification.updated","ach_transfer.created","ach_transfer.updated","card.created","card.updated","card_dispute.created","card_dispute.updated","check_deposit.created","check_deposit.updated","check_transfer.created","check_transfer.updated","declined_transaction.created","digital_wallet_token.created","digital_wallet_token.updated","document.created","entity.created","entity.updated","external_account.created","file.created","group.updated","group.heartbeat","inbound_ach_transfer_return.created","inbound_ach_transfer_return.updated","inbound_wire_drawdown_request.created","oauth_connection.created","oauth_connection.deactivated","pending_transaction.created","pending_transaction.updated","real_time_decision.card_authorization_requested","real_time_decision.digital_wallet_token_requested","real_time_decision.digital_wallet_authentication_requested","real_time_payments_transfer.created","real_time_payments_transfer.updated","real_time_payments_request_for_payment.created","real_time_payments_request_for_payment.updated","transaction.created","wire_drawdown_request.created","wire_drawdown_request.updated","wire_transfer.created","wire_transfer.updated"])).describe("Return results whose value is in the provided list. For GET requests, this should be encoded as a comma-delimited string, such as `?in=one,two,three`.").optional(), "associated_object_id": z.string().describe("Filter Events to those belonging to the object with the provided identifier.").optional() }).optional() }).shape