import { z } from "zod"

export const inputParamsSchema = {
  "client_id": z.string().describe("Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.").optional(),
  "user_token": z.string().describe("The user token associated with the User data is being requested for."),
  "webhook": z.string().describe("The destination URL to which webhooks will be sent\n"),
  "days_requested": z.number().int().lte(731).describe("The number of days of data to request for the report. Default value is 365; maximum is 731; minimum is 180. If a value lower than 180 is provided, a minimum of 180 days of history will be requested."),
  "days_required": z.number().int().describe("The minimum number of days of data required for the report to be successfully generated.").optional(),
  "client_report_id": z.string().nullable().describe("Client-generated identifier, which can be used by lenders to track loan applications.").optional(),
  "products": z.array(z.enum(["assets","auth","balance","balance_plus","beacon","identity","identity_match","investments","investments_auth","liabilities","payment_initiation","identity_verification","transactions","credit_details","income","income_verification","standing_orders","transfer","employment","recurring_transactions","transactions_refresh","signal","statements","processor_payments","processor_identity","profile","cra_base_report","cra_income_insights","cra_partner_insights","cra_network_insights","cra_cashflow_insights","layer","pay_by_bank"]).describe("A list of products that an institution can support. All Items must be initialized with at least one product. The Balance product is always available and does not need to be specified during initialization.")).min(1).nullable().describe("Specifies a list of products that will be eagerly generated when creating the report (in addition to the Base Report, which is always eagerly generated). These products will be made available before a success webhook is sent. Use this option to minimize response latency for product `/get` endpoints. Note that specifying `cra_partner_insights` in this field will trigger a billable event. Other products are not billed until the respective reports are fetched via product-specific `/get` endpoints.").optional(),
  "base_report": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `base_report` to the tool, first call the tool `expandSchema` with \"/properties/base_report\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Defines configuration options to generate a Base Report</property-description>").optional(),
  "cashflow_insights": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `cashflow_insights` to the tool, first call the tool `expandSchema` with \"/properties/cashflow_insights\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Defines configuration options to generate Cashflow Insights</property-description>").optional(),
  "partner_insights": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `partner_insights` to the tool, first call the tool `expandSchema` with \"/properties/partner_insights\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Defines configuration options to generate Partner Insights</property-description>").optional(),
  "consumer_report_permissible_purpose": z.enum(["ACCOUNT_REVIEW_CREDIT","ACCOUNT_REVIEW_NON_CREDIT","EMPLOYMENT","EXTENSION_OF_CREDIT","LEGITIMATE_BUSINESS_NEED_TENANT_SCREENING","LEGITIMATE_BUSINESS_NEED_OTHER","WRITTEN_INSTRUCTION_PREQUALIFICATION","WRITTEN_INSTRUCTION_OTHER"]).describe("Describes the reason you are generating a Consumer Report for this user.\n\n`ACCOUNT_REVIEW_CREDIT`: In connection with a consumer credit transaction for the review or collection of an account pursuant to FCRA Section 604(a)(3)(A).\n\n`ACCOUNT_REVIEW_NON_CREDIT`: For a legitimate business need of the information to review a non-credit account provided primarily for personal, family, or household purposes to determine whether the consumer continues to meet the terms of the account pursuant to FCRA Section 604(a)(3)(F)(2).\n\n`EMPLOYMENT`: For employment purposes pursuant to FCRA 604(a)(3)(B), including hiring, retention and promotion purposes.\n\n`EXTENSION_OF_CREDIT`: In connection with a credit transaction initiated by and involving the consumer pursuant to FCRA Section 604(a)(3)(A).\n\n`LEGITIMATE_BUSINESS_NEED_TENANT_SCREENING`: For a legitimate business need in connection with a business transaction initiated by the consumer primarily for personal, family, or household purposes in connection with a property rental assessment pursuant to FCRA Section 604(a)(3)(F)(i).\n\n`LEGITIMATE_BUSINESS_NEED_OTHER`: For a legitimate business need in connection with a business transaction made primarily for personal, family, or household initiated by the consumer pursuant to FCRA Section 604(a)(3)(F)(i).\n\n`WRITTEN_INSTRUCTION_PREQUALIFICATION`: In accordance with the written instructions of the consumer pursuant to FCRA Section 604(a)(2), to evaluate an application’s profile to make an offer to the consumer.\n\n`WRITTEN_INSTRUCTION_OTHER`: In accordance with the written instructions of the consumer pursuant to FCRA Section 604(a)(2), such as when an individual agrees to act as a guarantor or assumes personal liability for a consumer, business, or commercial loan.")
}