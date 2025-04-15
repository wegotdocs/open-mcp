export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_search_appkeyword_delete`
export const toolDescription = `删除搜索关键词`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/search/appkeyword/delete`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "config_id",
    "key_words",
    "target_appid"
  ]
}
export const flatMap = {}