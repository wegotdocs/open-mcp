import { z } from "zod"

export const inputParams = {
  "mini_app_id": z.string().describe("券可用的小程序appId，卡包详情页可跳转到该appId").optional(),
  "mini_app_path": z.string().describe("指定跳转到mini_app_id时的具体页面路径。 \t限制： \t1、只有mini_app_id有值时该值传入才会有效\t2、该小程序路径是相对路径。详情参见 <a href=\"https://opendocs.alipay.com/support/01rb18\">小程序scheme链接介绍</a>").optional(),
  "real_shop_ids": z.array(z.string()).describe("代运营商业关系门店列表，列表中的门店id是调用接口alipay.business.relation.shop.create创建门店返回的real_shop_id。接口参数是列表类型。").optional(),
  "service_codes": z.array(z.string()).describe("小程序服务编码，通过 alipay.open.app.appcontent.function.create(小程序服务创建)接口创建服务后获取。").optional(),
  "shop_ids": z.array(z.string()).describe("券可使用的门店列表。列表中的门店id是通过调用接口ant.merchant.expand.shop.create创建门店返回的支付宝门店id  接口参数是列表类型。").optional(),
  "store_ids": z.array(z.string()).describe("该字段后续废弃。券可使用的门店列表。列表中的门店id是通过调用接口ant.merchant.expand.shop.create创建门店返回的支付宝门店id。接口参数是列表类型。").optional(),
  "voucher_send_guide": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `voucher_send_guide` to the tool, first call the tool `expandSchema` with \"/properties/customer_guide/properties/voucher_send_guide\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "voucher_use_guide": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `voucher_use_guide` to the tool, first call the tool `expandSchema` with \"/properties/customer_guide/properties/voucher_use_guide\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}