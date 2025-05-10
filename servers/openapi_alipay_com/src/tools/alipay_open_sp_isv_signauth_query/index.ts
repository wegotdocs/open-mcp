export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_sp_isv_signauth_query`
export const toolDescription = `查询签约授权一体化订单状态详情`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/sp/isv/signauth/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "order_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}