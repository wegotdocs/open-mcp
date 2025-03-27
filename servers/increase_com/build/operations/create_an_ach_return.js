import { z } from "zod";
export const toolName = `create_an_ach_return`;
export const toolDescription = `Create an ACH Return`;
export const baseUrl = `https://api.increase.com`;
export const path = `/inbound_ach_transfer_returns`;
export const method = `post`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
        "in": "header",
        "envVarName": "API_KEY",
        "schemeType": "http",
        "schemeScheme": "bearer"
    }
];
export const inputParams = z.object({ "body": z.object({ "reason": z.enum(["authorization_revoked_by_customer", "payment_stopped", "customer_advised_unauthorized_improper_ineligible_or_incomplete", "representative_payee_deceased_or_unable_to_continue_in_that_capacity", "beneficiary_or_account_holder_deceased", "credit_entry_refused_by_receiver", "duplicate_entry", "corporate_customer_advised_not_authorized"]).describe("The reason why this transfer will be returned. The most usual return codes are `payment_stopped` for debits and `credit_entry_refused_by_receiver` for credits."), "transaction_id": z.string().describe("The transaction identifier of the Inbound ACH Transfer to return to the originating financial institution.") }).optional() }).shape;
