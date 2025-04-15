import { z } from "zod"

export const inputParams = {
  "open_id": z.string().describe("支付宝openId，用于支付宝用户在当前应用下的用户标识。").optional(),
  "template_id_list": z.array(z.string()).describe("消息模板id，可以填写多个，最多不超过3个。模板id需要保持同一个应用主体，并且展示在同一个订阅组件中的模板id。\t模板id获取详情参见<a href=\"https://opendocs.alipay.com/mini/01rnqx\">模板消息</a>。").optional(),
  "user_id": z.string().describe("订阅消息模板用户的支付宝唯一标识，2088开头。").optional()
}