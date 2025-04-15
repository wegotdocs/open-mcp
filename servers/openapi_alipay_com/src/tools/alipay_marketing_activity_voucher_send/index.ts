export { inputParams } from "./schema/root.js"

export const toolName = `alipay_marketing_activity_voucher_send`
export const toolDescription = `发放支付券`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/marketing/activity/voucher/send`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "activity_id",
    "merchant_access_mode",
    "open_id",
    "out_biz_no",
    "user_id"
  ]
}
export const flatMap = {}