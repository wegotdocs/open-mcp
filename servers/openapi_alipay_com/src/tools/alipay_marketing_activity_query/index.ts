export { inputParams } from "./schema/root.js"

export const toolName = `alipay_marketing_activity_query`
export const toolDescription = `查询活动详情`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/marketing/activity/{activity_id}`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "merchant_id",
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