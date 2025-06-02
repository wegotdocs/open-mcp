import { z } from "zod"

export const inputParamsSchema = {
  "baseAssetId": z.string().describe("The blockchain base assetId"),
  "vaultAccountId": z.string().describe("The id of the vault account that initiated the request to issue the token"),
  "type": z.string(),
  "name": z.string().describe("A string that represents the name of the collection"),
  "symbol": z.string().describe("A string that represents the symbol of the collection"),
  "adminAddress": z.string().describe("The EVM address of the user that will be set as the admin user of the collection"),
  "displayName": z.string().describe("A string to display as a name of the collection").optional(),
  "Idempotency-Key": z.string().describe("A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.").optional()
}