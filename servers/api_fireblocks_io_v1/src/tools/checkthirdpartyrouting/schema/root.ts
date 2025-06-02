import { z } from "zod"

export const inputParamsSchema = {
  "connectionId": z.string().describe("The ID of the network connection"),
  "assetType": z.string().describe("The destination asset type")
}