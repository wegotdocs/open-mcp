import { z } from "zod"

export const inputParamsSchema = {
  "client_id": z.string().describe("Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.").optional(),
  "user_token": z.string().describe("The user token associated with the User data is being requested for.").optional(),
  "third_party_user_token": z.string().describe("The third-party user token associated with the requested User data.").optional(),
  "add_ons": z.array(z.literal("cra_income_insights").describe("A list of add-ons that can be included in the PDF.\n\n`cra_income_insights`: Include Income Insights report in the PDF.")).describe("Use this field to include other reports in the PDF.").optional()
}