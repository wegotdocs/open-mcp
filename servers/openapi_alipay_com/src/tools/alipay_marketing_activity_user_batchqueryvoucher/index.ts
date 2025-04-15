export { inputParams } from "./schema/root.js"

export const toolName = `alipay_marketing_activity_user_batchqueryvoucher`
export const toolDescription = `条件查询用户券`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/marketing/activity/ordervoucher/user/batchqueryvoucher`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "user_id",
    "open_id",
    "activity_id",
    "belong_merchant_id",
    "sender_merchant_id",
    "voucher_status",
    "page_num",
    "merchant_access_mode",
    "page_size"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}