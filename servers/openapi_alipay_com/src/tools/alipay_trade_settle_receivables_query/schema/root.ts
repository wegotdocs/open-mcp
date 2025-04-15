import { z } from "zod"

export const inputParams = {
  "biz_product": z.string().describe("收单产品码，商家和支付宝签约的产品码").optional(),
  "extend_params": z.string().describe("扩展参数").optional(),
  "merchant_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `merchant_info` to the tool, first call the tool `expandSchema` with \"/properties/merchant_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "out_request_no": z.string().describe("外部请求号，32个字符以内，可包含字母、数字、下划线。").optional(),
  "query_his_date": z.string().describe("当trade_no不为空时，该字段不生效。\t查询历史日期，格式为 yyyyMMdd ，取值范围为昨日起至往前30日内；\t不传入时，查询实时待结算余额返回；\t传入过去某一天日期，查询对应日期的日终待结算余额返回（注意：日常场景下，昨日日终待结算余额只可在当天 02:00 后查询，在当天 02:00 前查询返回查询错误；大促场景下昨日日终可查时间会适当延后）；\t传入过去某一天非近30天内，返回参数错误。").optional(),
  "trade_no": z.string().describe("支付宝交易号，当该笔交易为直付通账期模式，查询该笔交易待确认结算金额时必传").optional()
}