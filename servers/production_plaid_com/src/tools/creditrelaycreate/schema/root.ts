import { z } from "zod"

export const inputParamsSchema = {
  "client_id": z.string().describe("Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.").optional(),
  "report_tokens": z.array(z.string().describe("The report token. It can only be an asset report token token.")).describe("List of report token strings, with at most one token of each report type. Currently only Asset Report token is supported."),
  "secondary_client_id": z.string().describe("The `secondary_client_id` is the client id of the third party with whom you would like to share the relay token."),
  "webhook": z.string().nullable().describe("URL to which Plaid will send webhooks when the Secondary Client successfully retrieves an Asset Report by calling `/credit/relay/get`.").optional()
}