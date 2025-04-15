export { inputParams } from "./schema/root.js"

export const toolName = `alipay_marketing_card_open`
export const toolDescription = `会员卡开卡`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/marketing/card/open`
export const method = `post`
export const security = []
export const keys = {
  "query": [
    "auth_token"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "card_ext_info",
    "card_template_id",
    "card_user_info",
    "member_ext_info",
    "open_card_channel",
    "open_card_channel_id",
    "out_serial_no",
    "paid_outer_card_info"
  ]
}
export const flatMap = {}