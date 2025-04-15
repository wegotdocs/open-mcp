export { inputParams } from "./schema/root.js"

export const toolName = `alipay_marketing_activity_voucher_append`
export const toolDescription = `追加支付券预算`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/marketing/activity/voucher/append`
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
    "out_biz_no",
    "voucher_quantity"
  ]
}
export const flatMap = {}