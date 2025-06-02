import { z } from "zod"

export const inputParamsSchema = {
  "externalTxId": z.string().describe("The external ID of the transaction to return")
}