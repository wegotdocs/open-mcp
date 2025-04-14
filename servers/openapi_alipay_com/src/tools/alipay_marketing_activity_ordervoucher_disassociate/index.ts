export { inputParams } from "./schema/root.js"

export const toolName = `alipay_marketing_activity_ordervoucher_disassociate`
export const toolDescription = `取消关联订单信息`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/marketing/activity/ordervoucher/disassociate`
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
    "trade_no",
    "voucher_code"
  ]
}
export const flatMap = {}