export { inputParams } from "./schema/root.js"

export const toolName = `alipay_marketing_activity_ordervoucher_codecount`
export const toolDescription = `统计商家券券码数量`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/marketing/ordervoucher/activity/{activity_id}/voucher/codecount`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "merchant_access_mode"
  ],
  "header": [],
  "path": [
    "activity_id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}