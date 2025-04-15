import { z } from "zod"

export const inputParams = {
  "available_brand_id": z.string().describe("全部门店可用的品牌ID\t提示:\t1.目前只支持传入当前券归属商户的品牌ID\t2.品牌ID可以在登录b.alipay.com-账户中心-品牌管理里查看。如果没有品牌，可以先创建品牌。Sop：\t注意事项\t1.只支持传入单个品牌ID\t2.传入品牌ID后，券的商户品牌和logo仍以voucher_display_pattern_info传入为准。").optional(),
  "exclude_shop_ids": z.array(z.string()).describe("券不可使用的门店列表。指定商户全部门店可用时可通过该字段排除部分不可用门店。 列表中的门店id是通过调用接口ant.merchant.expand.shop.create创建门店返回的支付宝门店id 接口参数是列表类型。").optional(),
  "merchant_ids": z.array(z.string()).describe("全部门店可用的商户ID").optional()
}