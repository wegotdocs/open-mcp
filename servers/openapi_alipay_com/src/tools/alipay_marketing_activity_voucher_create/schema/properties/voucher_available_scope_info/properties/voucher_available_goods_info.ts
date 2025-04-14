import { z } from "zod"

export const inputParams = {
  "available_goods_sku_ids": z.array(z.string()).describe("可优惠商品编码，商家自定义商品编码。当用户支付时，交易中的商品编码和支付券配置的商品编码有任一匹配时，可以使用优惠券。").optional(),
  "exclude_goods_sku_ids": z.array(z.string()).describe("不可核销商品编码，商家自定义商品编码。当用户支付时，交易中的商品编码和支付券配置的商品编码有任一匹配时，不可以使用优惠券。").optional(),
  "goods_description": z.string().describe("商品描述信息。 用于券面展示，向用户介绍商品").optional(),
  "goods_detail": z.string().describe("商品详情，会展示在特定渠道(如服务市场团购业务插件的套餐明细)。").optional(),
  "goods_detail_images": z.array(z.string()).describe("商品详情图片列表，会展示在特定渠道(如服务市场团购业务插件的头图)").optional(),
  "goods_detail_rich_description": z.string().describe("商品详情富文本描述").optional(),
  "goods_name": z.string().describe("商品名称。").optional(),
  "origin_amount": z.string().describe("原价。说明：该字段可不填，填入商品名称goods_name则必填;").optional()
}