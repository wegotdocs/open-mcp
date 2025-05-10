export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_search_boxactivity_batchquery`
export const toolDescription = `批量查询搜索直达活动配置`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/search/boxactivity/batchquery`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "box_id",
    "merchant_id",
    "page_number",
    "page_size"
  ]
}
export const flatMap = {}