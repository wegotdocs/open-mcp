import { z } from "zod"

export const inputParamsSchema = {
  "blockchainId": z.string().describe("Blockchain id of the assets").optional(),
  "assetClass": z.enum(["NATIVE","FT","FIAT","NFT","SFT"]).describe("Assets class").optional(),
  "symbol": z.string().min(1).describe("Assets onchain symbol").optional(),
  "scope": z.enum(["GLOBAL","LOCAL"]).describe("The scope of the asset").optional(),
  "deprecated": z.boolean().describe("Are assets deprecated").optional(),
  "ids": z.array(z.string()).describe("A list of asset IDs (max 100)").optional(),
  "pageCursor": z.string().describe("Next page cursor to fetch").optional(),
  "pageSize": z.number().gte(100).lte(1000).describe("Items per page").optional(),
  "Idempotency-Key": z.string().describe("A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.").optional()
}