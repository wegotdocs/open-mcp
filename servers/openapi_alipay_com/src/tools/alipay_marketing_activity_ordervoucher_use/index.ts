export { inputParams } from "./schema/root.js"

export const toolName = `alipay_marketing_activity_ordervoucher_use`
export const toolDescription = `同步券核销状态`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/marketing/ordervoucher/activity/{activity_id}/voucher/{voucher_code}/use`
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
    "goods_detail",
    "merchant_access_mode",
    "out_biz_no",
    "real_shop_id",
    "store_id",
    "total_fee",
    "trade_channel",
    "trade_no",
    "voucher_use_detail_info"
  ]
}
export const flatMap = {}