import { z } from "zod"

export const inputParamsSchema = {
  "assetId": z.string().describe("The asset for which to estimate the fee")
}