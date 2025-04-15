import { z } from "zod"

export const inputParamsSchema = {
  "client_id": z.string().describe("Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.").optional(),
  "relay_token": z.string().describe("The `relay_token` granting access to the report you would like to get."),
  "report_type": z.literal("asset").describe("The report type. It can be `asset`. Income report types are not yet supported."),
  "include_insights": z.boolean().describe("`true` if you would like to retrieve the Asset Report with Insights, `false` otherwise. This field defaults to `false` if omitted.").optional()
}