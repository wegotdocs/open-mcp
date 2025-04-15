import { z } from "zod"

export const inputParamsSchema = {
  "accountHolderCode": z.string().describe("The code of the Account Holder to be closed.")
}