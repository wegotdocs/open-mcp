import { z } from "zod"

export const inputParams = {
  "account_id": z.string().describe("账本ID").optional(),
  "account_quota": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `account_quota` to the tool, first call the tool `expandSchema` with \"/properties/account_quota\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "agreement_no": z.string().describe("授权签约协议号").optional(),
  "agreement_sign_info": z.string().describe("关联代扣协议签约串").optional(),
  "biz_scene": z.string().describe("业务场景，联系支付宝分配").optional(),
  "business_params": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `business_params` to the tool, first call the tool `expandSchema` with \"/properties/business_params\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "identity": z.string().describe("该字段为被邀请方账号ID：\t当identity_type为ALIPAY_USER_ID时，需要填支付宝ID；当identity_type为ALIPAY_LOGON_ID时，需要填支付宝登录号；当identity_type为ALIPAY_OPEN_ID时，需要填支付宝openId").optional(),
  "identity_type": z.string().describe("账号类型，目前支持如下类型：\t1、ALIPAY_USER_ID 支付宝的会员ID \t2、ALIPAY_LOGON_ID：支付宝登录号，支持邮箱和手机号格式\t3、ALIPAY_OPEN_ID：支付宝openId").optional(),
  "identity_verified_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `identity_verified_info` to the tool, first call the tool `expandSchema` with \"/properties/identity_verified_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "name": z.string().describe("成员姓名，账号类型为ALIPAY_LOGON_ID时必填").optional(),
  "product_code": z.string().describe("产品码").optional()
}