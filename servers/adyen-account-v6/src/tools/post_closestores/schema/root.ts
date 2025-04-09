import { z } from "zod"

export const inputParams = {
  "accountHolderCode": z.string().describe("The code of the account holder."),
  "stores": z.array(z.string()).describe("List of stores to be closed.")
}