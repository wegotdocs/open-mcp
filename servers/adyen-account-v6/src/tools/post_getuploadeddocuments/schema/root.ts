import { z } from "zod"

export const inputParamsSchema = {
  "accountHolderCode": z.string().describe("The code of the Account Holder for which to retrieve the documents."),
  "bankAccountUUID": z.string().describe("The code of the Bank Account for which to retrieve the documents.").optional(),
  "shareholderCode": z.string().describe("The code of the Shareholder for which to retrieve the documents.").optional()
}