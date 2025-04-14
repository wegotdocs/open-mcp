export { inputParams } from "./schema/root.js"

export const toolName = `ant_merchant_expand_apprecommend_account_query`
export const toolDescription = `查询已关联指定APP的账号列表`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/ant/merchant/expand/apprecommend/account/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "app_no",
    "page_size",
    "page_number"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}