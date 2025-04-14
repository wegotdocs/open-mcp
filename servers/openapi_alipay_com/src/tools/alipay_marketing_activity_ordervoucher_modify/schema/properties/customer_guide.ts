import { z } from "zod"

export const inputParams = {
  "mini_app_id": z.string().describe("券可用的小程序 appId，卡包详情页可跳转到该 appId。").optional(),
  "mini_app_path": z.string().describe("指定跳转到 mini_app_id 时的具体页面路径。").optional(),
  "real_shop_ids": z.array(z.string()).describe("券可使用的商业关系门店列表,列表中的门店id是调用接口alipay.business.relation.shop.create创建门店返回的real_shop_id。").optional(),
  "service_codes": z.array(z.string()).describe("小程序服务编码，通过 alipay.open.app.appcontent.function.create(小程序服务创建)接口创建服务后获取。").optional(),
  "shop_ids": z.array(z.string()).describe("券可使用的门店列表。列表中的门店id是通过调用接口ant.merchant.expand.shop.create创建门店返回的支付宝门店 id 接口参数是列表类型。 接口参数是列表类型。").optional(),
  "store_ids": z.array(z.string()).describe("后续废弃。券可使用的门店列表。列表中的门店id是通过调用接口ant.merchant.expand.shop.create创建门店返回的支付宝门店  id 接口参数是列表类型。\t接口参数是列表类型。").optional(),
  "voucher_send_guide": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `voucher_send_guide` to the tool, first call the tool `expandSchema` with \"/properties/customer_guide/properties/voucher_send_guide\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "voucher_use_guide": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `voucher_use_guide` to the tool, first call the tool `expandSchema` with \"/properties/customer_guide/properties/voucher_use_guide\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}