export { inputParams } from "./schema/root.js"

export const toolName = `ant_merchant_expand_info_query`
export const toolDescription = `蚂蚁商户信息查询接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/ant/merchant/expand/info/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "merchant_no"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}