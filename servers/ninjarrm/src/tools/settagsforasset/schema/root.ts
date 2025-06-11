import { z } from "zod"

export const inputParamsSchema = {
  "assetType": z.literal("device"),
  "assetId": z.number().int()
}