import { z } from "zod"

export const inputParams = {
  "item_id": z.string().describe("支付宝侧商品id。\t注意事项：支持状态为“出售中”的商品").optional(),
  "item_type": z.string().describe("商品模版类型").optional()
}