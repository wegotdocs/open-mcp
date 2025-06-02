import { z } from "zod"

export const inputParamsSchema = {
  "inputsToSpend": z.array(z.object({ "txHash": z.string().describe("Transaction Hash").optional(), "index": z.number().describe("The UTXO index (vOut)").optional() }).describe("A representation of an Unspent Transaction Output (UTXO).\n")).describe("Inputs that should be used in the transaction.").optional(),
  "inputsToExclude": z.array(z.object({ "txHash": z.string().describe("Transaction Hash").optional(), "index": z.number().describe("The UTXO index (vOut)").optional() }).describe("A representation of an Unspent Transaction Output (UTXO).\n")).describe("Inputs that shouldn't be used in the transaction.").optional()
}