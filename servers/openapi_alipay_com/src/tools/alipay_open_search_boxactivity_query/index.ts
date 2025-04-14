export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_search_boxactivity_query`
export const toolDescription = `查询搜索直达活动配置详情`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/search/boxactivity/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "box_activity_id",
    "merchant_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}