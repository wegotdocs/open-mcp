import { z } from "zod"

export const inputParamsSchema = {
  "assetType": z.literal("device")
}