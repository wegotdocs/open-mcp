import { z } from "zod"

export const inputParams = {
  "exchange_goods_name": z.string().describe("兑换商品名称").optional()
}