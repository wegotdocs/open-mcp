export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_search_box_query`
export const toolDescription = `查询搜索直达配置详情`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/search/box/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "box_id",
    "merchant_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}