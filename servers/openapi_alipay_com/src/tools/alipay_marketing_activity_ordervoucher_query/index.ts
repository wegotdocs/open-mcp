export { inputParams } from "./schema/root.js"

export const toolName = `alipay_marketing_activity_ordervoucher_query`
export const toolDescription = `查询商家券活动`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/marketing/activity/ordervoucher/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "activity_id",
    "merchant_access_mode"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}