export { inputParams } from "./schema/root.js"

export const toolName = `alipay_marketing_campaign_cash_create`
export const toolDescription = `创建现金活动`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/marketing/campaign/cash/create`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "coupon_name",
    "end_time",
    "merchant_link",
    "prize_msg",
    "prize_type",
    "send_freqency",
    "start_time",
    "total_money",
    "total_num"
  ]
}
export const flatMap = {}