import { z } from "zod"

export const inputParams = {
  "merchant_app_id": z.string().describe("商家应用appId").optional()
}