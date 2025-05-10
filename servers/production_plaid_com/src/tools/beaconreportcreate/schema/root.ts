import { z } from "zod"

export const inputParamsSchema = {
  "beacon_user_id": z.string().describe("ID of the associated Beacon User."),
  "type": z.enum(["first_party","stolen","synthetic","account_takeover","data_breach","unknown"]).describe("The type of Beacon Report.\n\n`first_party`: If this is the same individual as the one who submitted the KYC.\n\n`stolen`: If this is a different individual from the one who submitted the KYC.\n\n`synthetic`: If this is an individual using fabricated information.\n\n`account_takeover`: If this individual's account was compromised.\n\n`unknown`: If you aren't sure who committed the fraud."),
  "fraud_date": z.string().date().describe("A date in the format YYYY-MM-DD (RFC 3339 Section 5.6)."),
  "fraud_amount": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `fraud_amount` to the tool, first call the tool `expandSchema` with \"/properties/fraud_amount\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The amount and currency of the fraud or attempted fraud.\n`fraud_amount` should be omitted to indicate an unknown fraud amount.</property-description>").optional(),
  "client_id": z.string().describe("Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.").optional()
}