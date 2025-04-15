import { z } from "zod"

export const inputParams = {
  "invoice_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `invoice_info` to the tool, first call the tool `expandSchema` with \"/properties/invoice_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "m_short_name": z.string().describe("开票商户品牌简称，与商户入驻时的品牌简称保持一致。详情参见 <a href=\"https://opendocs.alipay.com/open/10691/welcome-to-lark\">电子发票</a>").optional(),
  "sub_m_short_name": z.string().describe("开票商户门店简称，与商户入驻时的门店简称保持一致。").optional()
}