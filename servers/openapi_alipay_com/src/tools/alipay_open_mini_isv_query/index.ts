export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_isv_query`
export const toolDescription = `isv查询代商家创建小程序记录`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/isv/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "order_no"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}