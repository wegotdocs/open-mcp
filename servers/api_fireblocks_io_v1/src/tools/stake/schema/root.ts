import { z } from "zod"

export const inputParamsSchema = {
  "chainDescriptor": z.enum(["ETH","SOL","MATIC","ETH_TEST6","SOL_TEST"]).describe("The protocol identifier (e.g. \"ETH\"/\"SOL\"/\"MATIC\") to use"),
  "vaultAccountId": z.string().describe("The source vault account to stake from"),
  "providerId": z.enum(["kiln","figment","lido","p2p"]).describe("The unique identifier of the staking provider"),
  "stakeAmount": z.string().describe("Amount of tokens to stake"),
  "txNote": z.string().describe("The note to associate with the stake transactions.").optional(),
  "fee": z.string().describe("Represents the fee for a transaction, which can be specified as a percentage value. Only one of fee/feeLevel is required.").optional(),
  "feeLevel": z.enum(["LOW","MEDIUM","HIGH"]).describe("Represents the fee level for a transaction, which can be set as slow, medium, or fast. Only one of fee/feeLevel is required.").optional(),
  "Idempotency-Key": z.string().describe("A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.").optional()
}