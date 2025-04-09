import { z } from "zod"

export const inputParams = {
  "accountCode": z.string().describe("The code of account to be closed.")
}