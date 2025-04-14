import { z } from "zod"

export const inputParams = {
  "belong_merchant_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `belong_merchant_info` to the tool, first call the tool `expandSchema` with \"/properties/belong_merchant_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "booth_code": z.string().describe("展位码。\t\tboothCode含义：boothCode表达的是某个渠道可以投放的展位码。例如：支付结果页PAY_RESULT\t\t枚举值：\tPAY_RESULT：支付结果页。\t\t后续新增可投放的展位后，会在文档中新增描述信息").optional(),
  "page_num": z.number().int().describe("查询的页码。\t\t特别说明：\t页码从1开始。").optional(),
  "page_size": z.number().int().describe("每页查询的个数，最大值为 100。").optional()
}