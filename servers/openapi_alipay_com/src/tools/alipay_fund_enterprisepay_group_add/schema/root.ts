import { z } from "zod"

export const inputParams = {
  "account_id": z.string().describe("企业签约账户ID").optional(),
  "agreement_no": z.string().describe("平台和企业的三方授权协议号").optional(),
  "biz_scene": z.string().describe("场景码，联系支付宝分配").optional(),
  "fund_ext_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `fund_ext_info` to the tool, first call the tool `expandSchema` with \"/properties/fund_ext_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "name": z.string().describe("群组名称").optional(),
  "out_biz_no": z.string().describe("外部业务号，外部群组号").optional(),
  "product_code": z.string().describe("产品码，默认值\tENTERPRISE_PAY").optional()
}