export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_search_box_offline`
export const toolDescription = `下架搜索直达`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/search/box/offline`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "box_id",
    "merchant_id"
  ]
}
export const flatMap = {}