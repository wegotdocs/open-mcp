import { z } from "zod"

export const toolName = `return_a_sandbox_ach_transfer`
export const toolDescription = `Return a Sandbox ACH Transfer`
export const baseUrl = `https://api.increase.com`
export const path = `/simulations/ach_transfers/{ach_transfer_id}/return`
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

export const inputParams = z.object({ "path": z.object({ "ach_transfer_id": z.string().describe("The identifier of the ACH Transfer you wish to return.") }).optional(), "body": z.object({ "reason": z.enum(["insufficient_fund","no_account","account_closed","invalid_account_number_structure","account_frozen_entry_returned_per_ofac_instruction","credit_entry_refused_by_receiver","unauthorized_debit_to_consumer_account_using_corporate_sec_code","corporate_customer_advised_not_authorized","payment_stopped","non_transaction_account","uncollected_funds","routing_number_check_digit_error","customer_advised_unauthorized_improper_ineligible_or_incomplete","amount_field_error","authorization_revoked_by_customer","invalid_ach_routing_number","file_record_edit_criteria","enr_invalid_individual_name","returned_per_odfi_request","addenda_error","limited_participation_dfi","incorrectly_coded_outbound_international_payment","other"]).describe("The reason why the Federal Reserve or destination bank returned this transfer. Defaults to `no_account`.").optional() }).optional() }).shape