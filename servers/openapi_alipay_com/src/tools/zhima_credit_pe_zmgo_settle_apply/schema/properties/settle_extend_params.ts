import { z } from "zod"

export const inputParams = {
  "quit_type": z.string().describe("quit_type为USER_CANCEL_QUIT或者SETTLE_APPLY_QUIT").optional(),
  "scene_pay_link_info": z.string().describe("商链通权益抵扣信息,  当前只有运营商使用,  未使用权益抵扣忽略该字段\t\tfundRuleList为对应的出资信息，目前该列表不支持多对象，长度限制为1。其中fundAgreementNo为本笔交易实际出资的协议，由(商链通二方通用版本接入文档)2.3.2获取，fundAmount为该出资协议出资的金额。\t\tbizScene和subBizScene为(商链通二方通用版本接入文档)2.1.3中支付宝侧分配的信息。\t\tbizMode=MERCHANT_ORDER为固定值。").optional(),
  "settle_adjust_reason": z.string().describe("action_type选择PAY_TO_ZERO时必填，\t\"SERVICE_CANCELED\":\"服务已取消\",\t\"OTHER_CHANNEL_PERFORMANCE\":\"户已通过其他方式履约\"").optional()
}