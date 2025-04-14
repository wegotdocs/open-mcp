import { z } from "zod"

export const inputParams = {
  "enterprise_id": z.string().describe("企业ID").optional(),
  "account_id": z.string().describe("共同账户ID").optional(),
  "agreement_no": z.string().describe("授权签约协议号").optional(),
  "operator_id": z.string().describe("传入操作人员标识").optional(),
  "shop_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `shop_info` to the tool, first call the tool `expandSchema` with \"/properties/shop_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "trade_no": z.string().describe("交易流水号").optional()
}