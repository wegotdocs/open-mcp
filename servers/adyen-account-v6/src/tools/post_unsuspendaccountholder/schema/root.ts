import { z } from "zod"

export const inputParams = {
  "accountHolderCode": z.string().describe("The code of the account holder to be reinstated.")
}