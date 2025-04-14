import { z } from "zod"

export const inputParams = {
  "account": z.string().describe("isv代操作的商户账号，可以是支付宝账号，也可以是pid（2088开头）").optional(),
  "contact_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `contact_info` to the tool, first call the tool `expandSchema` with \"/properties/contact_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "order_ticket": z.string().describe("订单授权凭证。若传入本参数，则对应事务提交后进入预授权模式。").optional(),
  "sign_mode": z.string().describe("签约模式：目前只支持批量签约并不通知商户确认 使用场景：批量签约并授权场景，先调用签约接口进行签约，然后调用授权接口授权，在批量模式下，一次性签约多个产品，要么都成功要么都失败，同时在授权接口传入orderNo，会一起发送签约确认和授权确认，商户只需要确认一次；如果不是批量签约并授权场景，不要传此参数，否则商户无法收到确认签约通知；").optional()
}