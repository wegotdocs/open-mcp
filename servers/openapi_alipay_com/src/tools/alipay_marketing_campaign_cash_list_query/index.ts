export { inputParams } from "./schema/root.js"

export const toolName = `alipay_marketing_campaign_cash_list_query`
export const toolDescription = `现金活动列表查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/marketing/campaign/cash/list/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "camp_status",
    "page_size",
    "page_index"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}