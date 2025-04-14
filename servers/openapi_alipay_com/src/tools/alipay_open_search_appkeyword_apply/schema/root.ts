import { z } from "zod"

export const inputParams = {
  "config_id": z.string().describe("关键词配置id，由支付宝生成，关键词申请通过后会通知接口返回，也可以申请单状态获取").optional(),
  "key_words": z.array(z.string()).describe("提报的关键词").optional(),
  "target_appid": z.string().describe("小程序id").optional()
}