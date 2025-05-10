import { z } from "zod"

export const inputParams = {
  "template": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `template` to the tool, first call the tool `expandSchema` with \"/properties/template\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "to_open_id": z.string().describe("支付宝openId，用于支付宝用户在当前应用下的用户标识。").optional(),
  "to_user_id": z.string().describe("消息接收用户的支付宝用户id，用户在支付宝的唯一标识，以 2088 开头的 16 位纯数字组成。").optional()
}