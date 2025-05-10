export { inputParams } from "./schema/root.js"

export const toolName = `alipay_marketing_activity_merchant_batchquery`
export const toolDescription = `查询活动可用商户`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/marketing/activity/{activity_id}/merchant/batchquery`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "merchant_id",
    "page_num",
    "page_size",
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