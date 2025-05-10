import { z } from "zod"

export const inputParamsSchema = {
  "client_id": z.string().describe("Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.").optional(),
  "user_token": z.string().describe("The user token associated with the User data is being requested for."),
  "third_party_client_id": z.string().describe("The Plaid API `client_id` of the third-party client the token will be shared with. The token will only be valid for the specified client."),
  "expiration_time": z.string().datetime({ offset: true }).nullable().describe("The expiration date and time for the third-party user token in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (`YYYY-MM-DDThh:mm:ssZ`). The expiration is restricted to a maximum of 24 hours from the token's creation time. If not provided, the token will automatically expire after 24 hours.").optional()
}