export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_category_require_query`
export const toolDescription = `查询类目所需资质信息`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/category/require/query`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "category_code_list"
  ]
}
export const flatMap = {}