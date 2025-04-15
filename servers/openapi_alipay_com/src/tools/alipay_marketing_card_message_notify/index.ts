export { inputParams } from "./schema/root.js"

export const toolName = `alipay_marketing_card_message_notify`
export const toolDescription = `会员卡消息通知`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/marketing/card/message/notify`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "notify_info",
    "notify_no",
    "notify_type",
    "occur_time",
    "target_card_no",
    "target_card_no_type"
  ]
}
export const flatMap = {}