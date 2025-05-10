import { z } from "zod"

export const inputParams = {
  "alipay_open_id": z.string().describe("支付宝用户ID。同一个外部请求号，调用方要确保支付宝userId取值不变").optional(),
  "alipay_user_id": z.string().describe("支付宝用户ID。同一个外部请求号，调用方要确保支付宝userId取值不变").optional(),
  "biz_time": z.string().describe("业务发生时间，如2016-07-06 00:00:02\t签约超时关单时间依赖这个时间\t这个时间会做幂等校验，如果创单幂等，但时间不同会失败").optional(),
  "custom_temp_conf": z.string().describe("废弃字段，勿用").optional(),
  "expire_aisle_data": z.string().describe("协议到期后通知").optional(),
  "ext_template_conf": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `ext_template_conf` to the tool, first call the tool `expandSchema` with \"/properties/ext_template_conf\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "extend_params": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `extend_params` to the tool, first call the tool `expandSchema` with \"/properties/extend_params\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "freeze_amount": z.string().describe("冻结金额，单位：元").optional(),
  "isv_pid": z.string().describe("ISV商户ID").optional(),
  "out_request_no": z.string().describe("外部请求号，唯一").optional(),
  "partner_id": z.string().describe("商户ID").optional(),
  "partner_user_identifier": z.string().describe("商户侧用户唯一标识。ex.商户侧uid").optional(),
  "pay_aisle_data": z.string().describe("结算成功后通知").optional(),
  "sign_aisle_data": z.string().describe("签约成功后通知").optional(),
  "template_id": z.string().describe("签约芝麻GO的模板ID").optional(),
  "timeout_express": z.string().describe("超时关单时间\t默认1H。1m～15d。m表示分钟，h表示小时，d表示天。该参数数值不接受小数点， 如1.5h，可转换为90m\t签约超时关单时间依赖这个时间").optional()
}