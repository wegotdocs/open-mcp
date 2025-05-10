import { z } from "zod"

export const inputParams = {
  "commodity_id": z.string().describe("服务插件ID").optional(),
  "shop_id": z.string().describe("店铺ID").optional()
}