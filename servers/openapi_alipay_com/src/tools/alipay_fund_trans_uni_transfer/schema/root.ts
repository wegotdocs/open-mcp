import { z } from "zod"

export const inputParams = {
  "biz_scene": z.string().describe("描述特定的业务场景，可传的参数如下：\tDIRECT_TRANSFER：单笔无密转账到支付宝，B2C现金红包;\tPERSONAL_COLLECTION：C2C现金红包-领红包").optional(),
  "business_params": z.string().describe("转账业务请求的扩展参数，支持传入的扩展参数如下：\tsub_biz_scene 子业务场景，红包业务必传，C2C现金红包、B2C现金红包均需传入，取值REDPACKET").optional(),
  "mutiple_currency_detail": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `mutiple_currency_detail` to the tool, first call the tool `expandSchema` with \"/properties/mutiple_currency_detail\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "order_title": z.string().describe("转账业务的标题，用于在支付宝用户的账单里显示").optional(),
  "original_order_id": z.string().describe("原支付宝业务单号。").optional(),
  "out_biz_no": z.string().describe("商家侧唯一订单号，由商家自定义。对于不同转账请求，商家需保证该订单号在自身系统唯一。").optional(),
  "passback_params": z.string().describe("公用回传参数，如果请求时传递了该参数，则异步通知商户时会回传该参数。").optional(),
  "payee_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `payee_info` to the tool, first call the tool `expandSchema` with \"/properties/payee_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "payer_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `payer_info` to the tool, first call the tool `expandSchema` with \"/properties/payer_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "product_code": z.string().describe("业务产品码，\t单笔无密转账到支付宝账户固定为:\tTRANS_ACCOUNT_NO_PWD；\t收发现金红包固定为:\tSTD_RED_PACKET；").optional(),
  "remark": z.string().describe("业务备注").optional(),
  "sign_data": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `sign_data` to the tool, first call the tool `expandSchema` with \"/properties/sign_data\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "trans_amount": z.string().describe("订单总金额，单位为元，精确到小数点后两位，STD_RED_PACKET产品取值范围[0.01,100000000]；\tTRANS_ACCOUNT_NO_PWD产品取值范围[0.1,100000000]").optional()
}