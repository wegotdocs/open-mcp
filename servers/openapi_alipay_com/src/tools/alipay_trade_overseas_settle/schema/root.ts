import { z } from "zod"

export const inputParams = {
  "amount": z.string().describe("跨境结算的人民币金额，单位为元；等于交易金额 (实际为实收金额)，加上净补差金额，减去已退款金额，减去净收费金额，再减去净分账金额，").optional(),
  "extend_params": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `extend_params` to the tool, first call the tool `expandSchema` with \"/properties/extend_params\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "foreign_settle_currency": z.string().describe("跨境结算的外币币种").optional(),
  "out_request_no": z.string().describe("外部请求号，开发者自行生成并保证唯一性，作为业务幂等性控制").optional(),
  "trade_no": z.string().describe("支付宝交易号").optional()
}