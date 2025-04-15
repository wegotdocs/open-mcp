import { z } from "zod"

export const inputParams = {
  "auth_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `auth_info` to the tool, first call the tool `expandSchema` with \"/properties/auth_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "biz_scene": z.string().describe("业务场景，比如群收款、红包等").optional(),
  "business_params": z.string().describe("JSON格式，传递业务扩展参数，使用前请与支付宝工程师联系！").optional(),
  "order_title": z.string().describe("订单的标题，用于在收银台和消费记录展示").optional(),
  "out_biz_no": z.string().describe("商户端的唯一订单号，对于同一笔转账请求，商户需保证该订单号唯一。").optional(),
  "passback_params": z.string().describe("回传参数，如果请求时传递了该参数，则异步通知商户时会回传该参数。").optional(),
  "payee_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `payee_info` to the tool, first call the tool `expandSchema` with \"/properties/payee_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "payer_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `payer_info` to the tool, first call the tool `expandSchema` with \"/properties/payer_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "product_code": z.string().describe("销售产品码，商家和支付宝签约的产品码").optional(),
  "refund_time_expire": z.string().describe("退款超时时间，格式yyyy-MM-dd HH:mm。到指定时间后，系统会自动触发退款，并原路退回到付款账户。如果指定了退款时间，必须早于销售方案里设置的最晚退款时间。").optional(),
  "remark": z.string().describe("备注").optional(),
  "time_expire": z.string().describe("绝对超时时间，格式为yyyy-MM-dd HH:mm").optional(),
  "trans_amount": z.string().describe("订单总金额，单位为元，精确到小数点后两位，取值范围[0.01,100000000]").optional()
}