export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_search_subservicekeyword_batchquery`
export const toolDescription = `服务关键词批量查询接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/search/subservicekeyword/batchquery`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "target_appid",
    "status",
    "page_number",
    "page_size"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}