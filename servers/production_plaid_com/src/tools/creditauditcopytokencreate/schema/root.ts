import { z } from "zod"

export const inputParamsSchema = {
  "client_id": z.string().describe("Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.").optional(),
  "report_tokens": z.array(z.string().describe("The report token. It can be an VOA Asset Report token or a VOE Asset Report token.")).describe("List of report tokens; can include at most one VOA/standard Asset Report tokens and one VOE Asset Report Token.")
}