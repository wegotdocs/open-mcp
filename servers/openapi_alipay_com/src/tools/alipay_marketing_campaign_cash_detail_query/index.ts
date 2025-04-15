export { inputParams } from "./schema/root.js"

export const toolName = `alipay_marketing_campaign_cash_detail_query`
export const toolDescription = `现金活动详情查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/marketing/campaign/cash/detail/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "crowd_no"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}