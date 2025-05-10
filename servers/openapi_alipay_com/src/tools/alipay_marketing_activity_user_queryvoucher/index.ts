export { inputParams } from "./schema/root.js"

export const toolName = `alipay_marketing_activity_user_queryvoucher`
export const toolDescription = `查询用户券详情`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/marketing/activity/ordervoucher/user/voucher`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "merchant_id",
    "user_id",
    "open_id",
    "activity_id",
    "voucher_id",
    "voucher_code",
    "merchant_access_mode"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}