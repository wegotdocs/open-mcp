import { z } from "zod"

export const inputParamsSchema = {
  "vaultAccountId": z.string().describe("The ID of the vault account to return, or 'default' for the default vault account"),
  "assetId": z.string().describe("The ID of the asset"),
  "eosAccountName": z.string().describe("Optional - when creating an EOS wallet, the account name. If not provided, a random name will be generated").optional(),
  "Idempotency-Key": z.string().describe("A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.").optional()
}