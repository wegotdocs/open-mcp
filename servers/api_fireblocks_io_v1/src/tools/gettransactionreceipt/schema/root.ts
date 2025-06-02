import { z } from "zod"

export const inputParamsSchema = {
  "baseAssetId": z.string().describe("The blockchain base assetId"),
  "txHash": z.string().describe("The transaction hash")
}