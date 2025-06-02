import { z } from "zod"

export const inputParamsSchema = {
  "chainDescriptor": z.enum(["SOL","SOL_TEST"]).describe("The protocol identifier (e.g. \"SOL\"/\"SOL_TEST\") to use"),
  "id": z.string().describe("id of position to split"),
  "amount": z.string().describe("Amount of tokens to be transferred to the new stake account."),
  "fee": z.string().describe("Represents the fee for a transaction, which can be specified as a percentage value. Only one of fee/feeLevel is required.").optional(),
  "feeLevel": z.enum(["LOW","MEDIUM","HIGH"]).describe("Represents the fee level for a transaction, which can be set as slow, medium, or fast. Only one of fee/feeLevel is required.").optional(),
  "txNote": z.string().describe("The note to associate with the transactions.").optional(),
  "Idempotency-Key": z.string().describe("A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.").optional()
}