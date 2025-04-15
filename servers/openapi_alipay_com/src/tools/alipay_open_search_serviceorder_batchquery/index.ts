export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_search_serviceorder_batchquery`
export const toolDescription = `搜索运营服务查询接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/search/serviceorder/batchquery`
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