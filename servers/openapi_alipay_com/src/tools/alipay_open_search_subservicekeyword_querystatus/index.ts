export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_search_subservicekeyword_querystatus`
export const toolDescription = `查询小程序服务关键词的审核工单的状态`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/search/subservicekeyword/querystatus`
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