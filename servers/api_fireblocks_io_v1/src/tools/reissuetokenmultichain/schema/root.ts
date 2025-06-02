import { z } from "zod"

export const inputParamsSchema = {
  "tokenLinkId": z.string().describe("The ID of the token link"),
  "vaultAccountId": z.string().describe("The id of the vault account that initiated the request to issue the token"),
  "chains": z.array(z.string()).describe("The base asset identifiers of the blockchains you want to deploy to"),
  "useGasless": z.boolean().describe("Whether to use gasless deployment or not").optional(),
  "fee": z.string().describe("Max fee amount for the deploy request. Interchangeable with the 'feeLevel' field").optional(),
  "feeLevel": z.enum(["LOW","MEDIUM","HIGH"]).describe("Fee level for the deploy request. Interchangeable with the 'fee' field").optional(),
  "Idempotency-Key": z.string().describe("A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.").optional()
}