import { z } from "zod"

export const inputParams = {
  "notify_info": z.string().describe("消息通知详情，包含消息通知需要的信息，map 格式存储。\t积分过期提醒：\t<br>expired_point 过期积分值\t<br>expired_time 过期时间").optional(),
  "notify_no": z.string().describe("消息通知幂等标识，业务流水号").optional(),
  "notify_type": z.string().describe("消息通知类型,\t<br>POINT_REMIND 积分过期提醒").optional(),
  "occur_time": z.string().describe("标识业务发生时间，时间格式为\"yyyy-MM-dd HH:mm:ss\"。").optional(),
  "target_card_no": z.string().describe("支付宝业务卡号，即通过 alipay.marketing.card.open 接口开卡后获取的 card_info.biz_card_no 值。").optional(),
  "target_card_no_type": z.string().describe("卡号ID类型").optional()
}