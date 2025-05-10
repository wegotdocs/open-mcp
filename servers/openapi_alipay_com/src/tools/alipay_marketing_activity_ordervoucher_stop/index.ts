export { inputParams } from "./schema/root.js"

export const toolName = `alipay_marketing_activity_ordervoucher_stop`
export const toolDescription = `停止商家券活动`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/marketing/ordervoucher/activity/{activity_id}/stop`
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
    "out_biz_no"
  ]
}
export const flatMap = {}