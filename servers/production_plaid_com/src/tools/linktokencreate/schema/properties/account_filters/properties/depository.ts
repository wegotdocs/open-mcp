import { z } from "zod"

export const inputParamsSchema = {
  "account_subtypes": z.array(z.enum(["checking","savings","hsa","cd","money market","paypal","prepaid","cash management","ebt","all"]).describe("Valid account subtypes for depository accounts. For a list containing descriptions of each subtype, see [Account schemas](https://plaid.com/docs/api/accounts/#StandaloneAccountType-depository).")).describe("An array of account subtypes to display in Link. If not specified, all account subtypes will be shown. For a full list of valid types and subtypes, see the [Account schema](https://plaid.com/docs/api/accounts#account-type-schema). ")
}