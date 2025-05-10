export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_search_appkeyword_querystatus`
export const toolDescription = `查询小程序搜索关键词的审核工单的状态`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/search/appkeyword/querystatus`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "target_appid",
    "apply_no"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}