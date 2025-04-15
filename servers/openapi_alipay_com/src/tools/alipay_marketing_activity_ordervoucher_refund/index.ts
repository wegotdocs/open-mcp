export { inputParams } from "./schema/root.js"

export const toolName = `alipay_marketing_activity_ordervoucher_refund`
export const toolDescription = `取消券核销状态`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/marketing/ordervoucher/activity/{activity_id}/voucher/{voucher_code}/refund`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "activity_id",
    "voucher_code"
  ],
  "cookie": [],
  "body": [
    "biz_dt",
    "merchant_access_mode",
    "out_biz_no",
    "total_fee",
    "voucher_refund_detail_info"
  ]
}
export const flatMap = {}