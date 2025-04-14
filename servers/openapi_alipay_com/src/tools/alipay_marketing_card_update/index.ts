export { inputParams } from "./schema/root.js"

export const toolName = `alipay_marketing_card_update`
export const toolDescription = `会员卡更新`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/marketing/card/update`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "card_info",
    "ext_info",
    "mcard_style_info",
    "merchant_card_msg_info",
    "notify_messages",
    "occur_time",
    "paid_outer_card_info",
    "target_card_no",
    "target_card_no_type"
  ]
}
export const flatMap = {}