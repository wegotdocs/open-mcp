import { z } from "zod"

export const inputParams = {
  "agreement_no": z.string().describe("支付宝系统中用以唯一标识用户签约记录的编号（用户签约成功后的协议号 ）").optional(),
  "business_params": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `business_params` to the tool, first call the tool `expandSchema` with \"/properties/business_params\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "notice_template": z.string().describe("目前共两种类型SERVIOCE_NOTICE和DEFAULT_PERMISSION，如果是服务变更提醒，需传入SERVIOCE_NOTICE").optional(),
  "out_request_no": z.string().describe("商户请求号。 由商家自定义，64个字符以内，仅支持字母、数字、下划线且需保证在商户端不重复。").optional(),
  "total_amount": z.string().describe("订单总金额。 单位为元，精确到小数点后两位，取值范围：[0.01,100000000] 。").optional()
}