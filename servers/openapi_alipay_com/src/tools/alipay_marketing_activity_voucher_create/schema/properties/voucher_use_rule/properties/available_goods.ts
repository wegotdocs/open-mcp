import { z } from "zod"

export const inputParams = {
  "goods_description": z.string().describe("商品描述信息。 用于券面展示，向用户介绍商品").optional(),
  "goods_ids": z.array(z.string()).describe("可优惠商品编码，商家自定义商品编码。当用户支付时，交易中的商品编码和支付券配置的商品编码有任一匹配时，可以使用优惠券。").optional(),
  "goods_name": z.string().describe("商品名称").optional()
}