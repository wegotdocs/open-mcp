import { z } from "zod"

export const toolName = `create_an_event_subscription`
export const toolDescription = `Create an Event Subscription`
export const baseUrl = `https://api.increase.com`
export const path = `/event_subscriptions`
export const method = `post`
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

export const inputParams = z.object({ "body": z.object({ "selected_event_category": z.enum(["account.created","account.updated","account_number.created","account_number.updated","account_statement.created","account_transfer.created","account_transfer.updated","ach_prenotification.created","ach_prenotification.updated","ach_transfer.created","ach_transfer.updated","card.created","card.updated","card_dispute.created","card_dispute.updated","check_deposit.created","check_deposit.updated","check_transfer.created","check_transfer.updated","declined_transaction.created","digital_wallet_token.created","digital_wallet_token.updated","document.created","entity.created","entity.updated","external_account.created","file.created","group.updated","group.heartbeat","inbound_ach_transfer_return.created","inbound_ach_transfer_return.updated","inbound_wire_drawdown_request.created","oauth_connection.created","oauth_connection.deactivated","pending_transaction.created","pending_transaction.updated","real_time_decision.card_authorization_requested","real_time_decision.digital_wallet_token_requested","real_time_decision.digital_wallet_authentication_requested","real_time_payments_transfer.created","real_time_payments_transfer.updated","real_time_payments_request_for_payment.created","real_time_payments_request_for_payment.updated","transaction.created","wire_drawdown_request.created","wire_drawdown_request.updated","wire_transfer.created","wire_transfer.updated"]).describe("If specified, this subscription will only receive webhooks for Events with the specified `category`.").optional(), "shared_secret": z.string().min(1).max(100).describe("The key that will be used to sign webhooks. If no value is passed, a random string will be used as default.").optional(), "url": z.string().describe("The URL you'd like us to send webhooks to.") }).optional() }).shape