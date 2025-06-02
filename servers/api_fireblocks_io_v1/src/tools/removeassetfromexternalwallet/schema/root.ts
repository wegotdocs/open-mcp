import { z } from "zod"

export const inputParamsSchema = {
  "walletId": z.string().describe("The ID of the wallet"),
  "assetId": z.string().describe("The ID of the asset to delete")
}