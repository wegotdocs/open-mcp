import { z } from "zod"

export const inputParams = {
  "goods_ids": z.array(z.string()).describe("可优惠商品编码，商家自定义商品编码。当用户支付时，交易中的商品编码和支付券配置的商品编码有任一匹配时，可以使用优惠券。\t限制:\t1、核销商品范围只能增大不能减小").optional()
}