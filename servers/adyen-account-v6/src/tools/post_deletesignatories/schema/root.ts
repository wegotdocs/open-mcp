import { z } from "zod"

export const inputParams = {
  "accountHolderCode": z.string().describe("The code of the account holder from which to delete the signatories."),
  "signatoryCodes": z.array(z.string()).describe("Array of codes of the signatories to be deleted.")
}