import { z } from "zod"

export const inputParams = {
  "delivery_id": z.string().describe("推广计划id"),
  "belong_merchant_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `belong_merchant_info` to the tool, first call the tool `expandSchema` with \"/properties/belong_merchant_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "delivery_config_list": z.array(z.object({ "activity_id": z.string().describe("活动id").optional(), "booth_code": z.string().describe("展位码:boothCode表达的是具体渠道所属的展位码。例如：支付结果页PAYMENT_RESULT").optional(), "channel": z.string().describe("可投放的渠道标识.").optional() })).describe("\"[已废弃] 待查询的投放配置列表。 最大数量限制20个。\"").optional(),
  "merchant_access_mode": z.string().describe("商户接入模式").optional()
}