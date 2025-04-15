export { inputParams } from "./schema/root.js"

export const toolName = `ant_merchant_expand_apprecommend_available_query`
export const toolDescription = `查询可关联APP的账号列表`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/ant/merchant/expand/apprecommend/available/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "page_size",
    "page_number"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}