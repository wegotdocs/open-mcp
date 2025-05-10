import { z } from "zod"

export const inputParams = {
  "activity_id": z.string().describe("活动id"),
  "merchant_id": z.string().describe("商户PID,默认为当前接口调用商户。").optional(),
  "merchant_access_mode": z.string().describe("商户接入模式。").optional()
}