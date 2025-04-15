export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_search_appkeywordquota_query`
export const toolDescription = `查询小程序可配置关键词数`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/search/appkeywordquota/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "target_appid"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}