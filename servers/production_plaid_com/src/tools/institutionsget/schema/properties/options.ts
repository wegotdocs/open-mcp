import { z } from "zod"

export const inputParamsSchema = {
  "products": z.array(z.enum(["assets","auth","balance","balance_plus","beacon","identity","identity_match","investments","investments_auth","liabilities","payment_initiation","identity_verification","transactions","credit_details","income","income_verification","standing_orders","transfer","employment","recurring_transactions","transactions_refresh","signal","statements","processor_payments","processor_identity","profile","cra_base_report","cra_income_insights","cra_partner_insights","cra_network_insights","cra_cashflow_insights","layer","pay_by_bank"]).describe("A list of products that an institution can support. All Items must be initialized with at least one product. The Balance product is always available and does not need to be specified during initialization.")).min(1).nullable().describe("Filter the Institutions based on which products they support. Will only return institutions that support all listed products. When filtering based on `auth`, an institution must support Instant Auth to match the criterion.").optional(),
  "routing_numbers": z.array(z.string()).nullable().describe("Specify an array of routing numbers to filter institutions. The response will only return institutions that match all of the routing numbers in the array. Routing number records used for this matching are generally comprehensive; however, failure to match a given routing number to an institution does not necessarily mean that the institution is unsupported by Plaid.").optional(),
  "oauth": z.boolean().nullable().describe("Limit results to institutions with or without OAuth login flows. Note that institutions will have `oauth` set to `true` if some Items associated with that institution are required to use OAuth flows; institutions in a state of migration to OAuth will have the `oauth` attribute set to `true`.").optional(),
  "include_optional_metadata": z.boolean().describe("When `true`, return the institution's homepage URL, logo and primary brand color. Not all institutions' logos are available.\n\nNote that Plaid does not own any of the logos shared by the API, and that by accessing or using these logos, you agree that you are doing so at your own risk and will, if necessary, obtain all required permissions from the appropriate rights holders and adhere to any applicable usage guidelines. Plaid disclaims all express or implied warranties with respect to the logos.").optional(),
  "include_auth_metadata": z.boolean().describe("When `true`, returns metadata related to the Auth product indicating which auth methods are supported.").optional(),
  "include_payment_initiation_metadata": z.boolean().describe("When `true`, returns metadata related to the Payment Initiation product indicating which payment configurations are supported.").optional()
}