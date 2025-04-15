export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_search_subservicekeyword_apply`
export const toolDescription = `提报服务关键词`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/search/subservicekeyword/apply`
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
    "sub_service_code",
    "target_appid"
  ]
}
export const flatMap = {}