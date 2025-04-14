export { inputParams } from "./schema/root.js"

export const toolName = `alipay_marketing_activity_voucher_publish`
export const toolDescription = `激活支付券`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/marketing/activity/voucher/publish`
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
    "out_biz_no"
  ]
}
export const flatMap = {}