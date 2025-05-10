export { inputParams } from "./schema/root.js"

export const toolName = `alipay_pcredit_huabei_auth_order_query`
export const toolDescription = `花呗先享订单查询接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/pcredit/huabei/auth/order/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "auth_opt_id",
    "alipay_user_id",
    "open_id",
    "out_request_no"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}