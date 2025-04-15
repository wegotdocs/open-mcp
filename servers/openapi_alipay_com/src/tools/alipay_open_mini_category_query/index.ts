export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_category_query`
export const toolDescription = `小程序类目树查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/category/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "is_filter"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}