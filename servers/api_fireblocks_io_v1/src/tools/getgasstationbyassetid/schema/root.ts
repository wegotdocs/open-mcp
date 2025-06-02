import { z } from "zod"

export const inputParamsSchema = {
  "assetId": z.string().describe("The ID of the asset")
}