import { z } from "zod"

export const inputParamsSchema = {
  "txHash": z.string().describe("The hash of the transaction").optional(),
  "origin": z.string().describe("The origin address of the transaction").optional(),
  "destination": z.string().describe("The destination address of the transaction").optional()
}