import { z } from "zod"

export const inputParamsSchema = {
  "accountCode": z.string().describe("The code of account to be closed.")
}