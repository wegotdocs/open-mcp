export { inputParams } from "./schema/root.js"

export const toolName = `alipay_marketing_activity_batchquery`
export const toolDescription = `条件查询活动列表`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/marketing/activity/batchquery`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "activity_status",
    "merchant_access_mode",
    "merchant_id",
    "page_num",
    "page_size"
  ]
}
export const flatMap = {}