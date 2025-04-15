export { inputParams } from "./schema/root.js"

export const toolName = `alipay_marketing_activity_delivery_query`
export const toolDescription = `查询推广计划`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/marketing/delivery/{delivery_id}/query`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "delivery_id"
  ],
  "cookie": [],
  "body": [
    "belong_merchant_info",
    "delivery_config_list",
    "merchant_access_mode"
  ]
}
export const flatMap = {}