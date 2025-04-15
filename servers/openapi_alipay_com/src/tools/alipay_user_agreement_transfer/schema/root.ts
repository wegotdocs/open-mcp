import { z } from "zod"

export const inputParams = {
  "agreement_no": z.string().describe("支付宝系统中用以唯一标识用户签约记录的编号（用户签约成功后的协议号 ），如果传了该参数，其他参数会被忽略").optional(),
  "period_rule_params": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `period_rule_params` to the tool, first call the tool `expandSchema` with \"/properties/period_rule_params\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "target_product_code": z.string().describe("协议产品码，商户和支付宝签约时确定，不同业务场景对应不同的签约产品码。这里指的是需要修改目标产品码的值").optional()
}