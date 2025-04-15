export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_search_baseorder_modify`
export const toolDescription = `搜索运营提报基础信息工单`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/search/baseorder/modify`
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