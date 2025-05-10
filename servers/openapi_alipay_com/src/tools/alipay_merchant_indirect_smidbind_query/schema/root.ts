import { z } from "zod"

export const inputParams = {
  "sub_merchant_id": z.string().describe("支付宝商户id").optional()
}