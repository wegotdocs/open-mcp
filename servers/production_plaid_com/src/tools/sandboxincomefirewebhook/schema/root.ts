import { z } from "zod"

export const inputParamsSchema = {
  "client_id": z.string().describe("Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.").optional(),
  "item_id": z.string().describe("The Item ID associated with the verification."),
  "user_id": z.string().describe("The Plaid `user_id` of the User associated with this webhook, warning, or error.").optional(),
  "webhook": z.string().describe("The URL to which the webhook should be sent."),
  "verification_status": z.enum(["VERIFICATION_STATUS_PROCESSING_COMPLETE","VERIFICATION_STATUS_PROCESSING_FAILED","VERIFICATION_STATUS_PENDING_APPROVAL"]).describe("`VERIFICATION_STATUS_PROCESSING_COMPLETE`: The income verification status processing has completed. If the user uploaded multiple documents, this webhook will fire when all documents have finished processing. Call the `/income/verification/paystubs/get` endpoint and check the document metadata to see which documents were successfully parsed.\n\n`VERIFICATION_STATUS_PROCESSING_FAILED`: A failure occurred when attempting to process the verification documentation.\n\n`VERIFICATION_STATUS_PENDING_APPROVAL`: (deprecated) The income verification has been sent to the user for review.").optional(),
  "webhook_code": z.enum(["INCOME_VERIFICATION","INCOME_VERIFICATION_RISK_SIGNALS"]).describe("The webhook codes that can be fired by this test endpoint.")
}