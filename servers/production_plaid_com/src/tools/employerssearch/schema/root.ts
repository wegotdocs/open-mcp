import { z } from "zod"

export const inputParamsSchema = {
  "client_id": z.string().describe("Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.").optional(),
  "query": z.string().describe("The employer name to be searched for."),
  "products": z.array(z.string()).describe("The Plaid products the returned employers should support. Currently, this field must be set to `\"deposit_switch\"`.")
}