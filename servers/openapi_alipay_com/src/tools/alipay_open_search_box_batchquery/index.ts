export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_search_box_batchquery`
export const toolDescription = `批量查询搜索直达配置列表`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/search/box/batchquery`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "merchant_id",
    "page_number",
    "page_size"
  ]
}
export const flatMap = {}