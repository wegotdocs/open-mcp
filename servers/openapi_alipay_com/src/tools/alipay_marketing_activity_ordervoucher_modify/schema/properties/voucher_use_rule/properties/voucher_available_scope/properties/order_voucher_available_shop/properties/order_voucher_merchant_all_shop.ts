import { z } from "zod"

export const inputParams = {
  "exclude_shop_ids": z.array(z.string()).describe("券不可使用的门店列表。指定商户全部门店可用时可通过该字段排除部分不可用门店。列表中的门店id是通过调用接口ant.merchant.expand.shop.create创建门店返回的支付宝门店id  接口参数是列表类型。").optional()
}