import { z } from "zod"

export const inputParamsSchema = {
  "txId": z.string().describe("The ID of the transaction to return")
}