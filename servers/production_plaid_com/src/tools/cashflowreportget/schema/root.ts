import { z } from "zod"

export const inputParamsSchema = {
  "client_id": z.string().describe("Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.").optional(),
  "access_token": z.string().describe("The access token associated with the Item data is being requested for."),
  "secret": z.string().describe("Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.").optional(),
  "days_requested": z.number().int().gte(1).lte(730).describe("Number of days to retrieve transactions data for (1 to 730)"),
  "count": z.number().int().gte(1).lte(500).describe("Number of transactions to fetch per call").optional(),
  "cursor": z.string().describe("The cursor value represents the last update requested. Pass in the empty string \"\" in the first call.").optional()
}