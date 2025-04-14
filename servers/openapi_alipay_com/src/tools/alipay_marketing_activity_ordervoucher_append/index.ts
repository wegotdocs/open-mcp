export { inputParams } from "./schema/root.js"

export const toolName = `alipay_marketing_activity_ordervoucher_append`
export const toolDescription = `修改商家券活动发券数量上限`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/marketing/ordervoucher/activity/{activity_id}/append`
export const method = `patch`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "activity_id"
  ],
  "cookie": [],
  "body": [
    "merchant_access_mode",
    "out_biz_no",
    "voucher_quantity"
  ]
}
export const flatMap = {}