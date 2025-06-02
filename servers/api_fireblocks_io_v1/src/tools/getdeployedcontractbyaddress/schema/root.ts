import { z } from "zod"

export const inputParamsSchema = {
  "contractAddress": z.string().describe("The contract's onchain address"),
  "assetId": z.string()
}