import { z } from "zod"

export const inputParamsSchema = {
  "contractId": z.string().describe("The ID of the contract"),
  "assetId": z.string().describe("The ID of the asset to delete")
}