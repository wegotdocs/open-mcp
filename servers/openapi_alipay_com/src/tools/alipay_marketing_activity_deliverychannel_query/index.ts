export { inputParams } from "./schema/root.js"

export const toolName = `alipay_marketing_activity_deliverychannel_query`
export const toolDescription = `查询可推广渠道`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/marketing/activity/deliverychannel/query`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "belong_merchant_info",
    "booth_code",
    "page_num",
    "page_size"
  ]
}
export const flatMap = {}