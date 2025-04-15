export { inputParams } from "./schema/root.js"

export const toolName = `alipay_marketing_campaign_cash_trigger`
export const toolDescription = `触发现金红包活动`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/marketing/campaign/cash/trigger`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "crowd_no",
    "login_id",
    "open_id",
    "order_price",
    "out_biz_no",
    "user_id"
  ]
}
export const flatMap = {}