export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_search_orderdetail_query`
export const toolDescription = `查询搜索服务工单的详细信息`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/search/orderdetail/query`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "biz_data",
    "biz_type",
    "opt_type"
  ]
}
export const flatMap = {}