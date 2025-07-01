import { z } from "zod"

export const inputParamsSchema = {
  "value": z.number().describe("Amount to be transferred"),
  "walletId": z.string().describe("WalletId of the target account"),
  "externalReference": z.string().describe("Transfer identifier in your system").optional()
}