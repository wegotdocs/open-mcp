export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_isv_fastregister_query`
export const toolDescription = `查询试用小程序`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/isv/fastregister/query`
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