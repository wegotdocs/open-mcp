import { z } from "zod"

export const inputParams = {
  "account_id": z.string().describe("账户ID").optional(),
  "agreement_no": z.string().describe("授权协议号").optional(),
  "biz_scene": z.string().describe("业务场景").optional(),
  "member_list": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `member_list` to the tool, first call the tool `expandSchema` with \"/properties/member_list\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "product_code": z.string().describe("产品码").optional()
}