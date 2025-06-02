import { z } from "zod"

export const inputParamsSchema = {
  "type": z.enum(["FUNGIBLE_TOKEN","NON_FUNGIBLE_TOKEN","TOKEN_UTILITY","TOKEN_EXTENSION"]).describe("The type of token being linked"),
  "refId": z.string().describe("The Fireblocks' token link reference id. For example, 'BQ5R_BDESC_ABC' if it's a fungible \n\t\t\t\t\tasset").optional(),
  "displayName": z.string().describe("The token display name").optional(),
  "baseAssetId": z.string().describe("The blockchain base assetId").optional(),
  "contractAddress": z.string().describe("The contract's onchain address").optional(),
  "Idempotency-Key": z.string().describe("A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.").optional()
}