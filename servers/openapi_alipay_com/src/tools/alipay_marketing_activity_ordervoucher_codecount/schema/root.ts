import { z } from "zod"

export const inputParams = {
  "activity_id": z.string().describe("活动id"),
  "merchant_access_mode": z.string().describe("商户接入模式").optional()
}