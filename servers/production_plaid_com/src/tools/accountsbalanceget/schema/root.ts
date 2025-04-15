import { z } from "zod"

export const inputParamsSchema = {
  "access_token": z.string().describe("The access token associated with the Item data is being requested for."),
  "secret": z.string().describe("Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.").optional(),
  "client_id": z.string().describe("Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.").optional(),
  "options": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `options` to the tool, first call the tool `expandSchema` with \"/properties/options\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Optional parameters to `/accounts/balance/get`.</property-description>").optional(),
  "payment_details": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `payment_details` to the tool, first call the tool `expandSchema` with \"/properties/payment_details\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>To enable Balance Plus (beta), send this object as part of the `/accounts/balance/get` request. Only available to customers participating in the Balance Plus beta program; to enroll in the beta, contact your account manager. If this object is present in the request, the [`payment_risk_assessment`](https://plaid.com/docs/balance/balance-plus/#accounts-balance-get-response-payment-risk-assessment-risk-level) object will be present in the response.</property-description>").optional()
}