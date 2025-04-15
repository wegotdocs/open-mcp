import { z } from "zod"

export const inputParamsSchema = {
  "client_id": z.string().describe("Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.").optional(),
  "user_token": z.string().describe("The user token associated with the User data is being requested for."),
  "consumer_report_permissible_purpose": z.enum(["ACCOUNT_REVIEW_CREDIT","WRITTEN_INSTRUCTION_OTHER"]).describe("Describes the reason you are generating a Consumer Report for this user.\n\n`ACCOUNT_REVIEW_CREDIT`: In connection with a consumer credit transaction for the review or collection of an account pursuant to FCRA Section 604(a)(3)(A).\n\n`WRITTEN_INSTRUCTION_OTHER`: In accordance with the written instructions of the consumer pursuant to FCRA Section 604(a)(2), such as when an individual agrees to act as a guarantor or assumes personal liability for a consumer, business, or commercial loan.")
}