import { z } from "zod"

export const inputParams = {
  "ceiling_amount": z.string().describe("封顶金额。").optional(),
  "discount": z.string().describe("折扣率。").optional(),
  "floor_amount": z.string().describe("门槛金额。说明：该字段可不填，认为无门槛;").optional(),
  "goods_name": z.string().describe("商品名称。").optional(),
  "origin_amount": z.string().describe("原价。说明：该字段可不填，填入商品名称goods_name则必填;").optional()
}