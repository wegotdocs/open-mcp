import { z } from "zod"

export const inputParams = {
  "accountHolderCode": z.string().describe("The code of the Account Holder to be closed.")
}