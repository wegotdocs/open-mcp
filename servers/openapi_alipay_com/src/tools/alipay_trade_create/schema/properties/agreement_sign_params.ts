import { z } from "zod"

export const inputParams = {
  "access_params": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `access_params` to the tool, first call the tool `expandSchema` with \"/properties/agreement_sign_params/properties/access_params\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "allow_huazhi_degrade": z.boolean().describe("是否允许花芝GO降级成原代扣（即销售方案指定的代扣产品），在花芝GO场景下才会使用该值。取值：true-允许降级，false-不允许降级。默认为true。").optional(),
  "effect_time": z.string().describe("设置签约请求的有效时间，单位为秒。如传入600，商户发起签约请求到用户进入支付宝签约页面的时间差不能超过10分钟。").optional(),
  "external_agreement_no": z.string().describe("商户签约号，代扣协议中标示用户的唯一签约号（确保在商户系统中唯一）。 格式规则：支持大写小写字母和数字，最长32位。 商户系统按需传入，如果同一用户在同一产品码、同一签约场景下，签订了多份代扣协议，那么需要指定并传入该值。").optional(),
  "external_logon_id": z.string().describe("用户在商户网站的登录账号，用于在签约页面展示，如果为空，则不展示").optional(),
  "period_rule_params": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `period_rule_params` to the tool, first call the tool `expandSchema` with \"/properties/agreement_sign_params/properties/period_rule_params\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "personal_product_code": z.string().describe("个人签约产品码，商户和支付宝签约时确定。").optional(),
  "product_code": z.string().describe("商家和支付宝签约的产品码。 商家扣款产品传入固定值：GENERAL_WITHHOLDING").optional(),
  "recommend_sort_channel_params": z.array(z.object({ "asset_type_code": z.string().describe("资产类型编码，具体传参值请联系技术进行分配。").optional(), "inst_id": z.string().describe("机构描述").optional() })).describe("商户指定优先渠道扣款参数").optional(),
  "sign_notify_url": z.string().describe("签约成功后商户用于接收异步通知的地址。如果不传入，签约与支付的异步通知都会发到外层notify_url参数传入的地址；如果外层也未传入，签约与支付的异步通知都会发到商户appid配置的网关地址。").optional(),
  "sign_scene": z.string().describe("协议签约场景，商户和支付宝签约时确定，商户可咨询技术支持。").optional(),
  "sub_merchant": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `sub_merchant` to the tool, first call the tool `expandSchema` with \"/properties/agreement_sign_params/properties/sub_merchant\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}