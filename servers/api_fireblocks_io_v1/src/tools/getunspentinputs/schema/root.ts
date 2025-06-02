import { z } from "zod"

export const inputParamsSchema = {
  "vaultAccountId": z.string().describe("The ID of the vault account"),
  "assetId": z.string().describe("The ID of the asset")
}