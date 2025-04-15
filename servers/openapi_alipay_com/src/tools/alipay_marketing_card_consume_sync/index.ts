export { inputParams } from "./schema/root.js"

export const toolName = `alipay_marketing_card_consume_sync`
export const toolDescription = `会员卡消费记录同步`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/marketing/card/consume/sync`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "act_pay_amount",
    "card_info",
    "gain_benefit_list",
    "memo",
    "shop_code",
    "swipe_cert_type",
    "target_card_no",
    "target_card_no_type",
    "trade_amount",
    "trade_name",
    "trade_no",
    "trade_time",
    "trade_type",
    "use_benefit_list"
  ]
}
export const flatMap = {}