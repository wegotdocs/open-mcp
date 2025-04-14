import { z } from "zod"

export const inputParams = {
  "available_app_ids": z.array(z.string()).describe("可核销的支付宝小程序id").optional()
}