import { z } from "zod"

export const inputParamsSchema = {
  "client_id": z.string().describe("Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.").optional(),
  "account_number": z.string().describe("The user's account number."),
  "routing_number": z.string().describe("The user's routing number."),
  "wire_routing_number": z.string().describe("The user's wire transfer routing number. This is the ABA number; for some institutions, this may differ from the ACH number used in `routing_number`. This field must be set for the created item to be eligible for wire transfers.").optional(),
  "account_type": z.string().describe("The type of the bank account (`checking` or `savings`).")
}