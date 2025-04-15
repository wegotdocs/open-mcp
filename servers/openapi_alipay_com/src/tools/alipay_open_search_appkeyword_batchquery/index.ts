export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_search_appkeyword_batchquery`
export const toolDescription = `查询小程序已配置关键词`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/search/appkeyword/batchquery`
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