import { z } from "zod"

export const inputParamsSchema = {
  "account_subtypes": z.array(z.enum(["credit card","paypal","all"]).describe("Valid account subtypes for credit accounts. For a list containing descriptions of each subtype, see [Account schemas](https://plaid.com/docs/api/accounts/#StandaloneAccountType-credit).")).describe("An array of account subtypes to display in Link. If not specified, all account subtypes will be shown. For a full list of valid types and subtypes, see the [Account schema](https://plaid.com/docs/api/accounts#account-type-schema). ")
}