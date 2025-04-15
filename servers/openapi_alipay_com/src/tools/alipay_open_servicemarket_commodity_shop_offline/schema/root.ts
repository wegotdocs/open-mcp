import { z } from "zod"

export const inputParams = {
  "commodity_id": z.string().describe("服务商户ID").optional(),
  "shop_id": z.string().describe("门店ID").optional()
}