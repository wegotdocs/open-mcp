import { z } from "zod"

export const inputParams = {
  "extend_params": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `extend_params` to the tool, first call the tool `expandSchema` with \"/properties/extend_params\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "out_request_no": z.string().describe("确认结算请求流水号，开发者自行生成并保证唯一性，作为业务幂等性控制").optional(),
  "settle_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `settle_info` to the tool, first call the tool `expandSchema` with \"/properties/settle_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "trade_no": z.string().describe("支付宝交易号").optional()
}