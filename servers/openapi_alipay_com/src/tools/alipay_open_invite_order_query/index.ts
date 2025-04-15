export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_invite_order_query`
export const toolDescription = `查询签约申请单状态`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/invite/order/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "isv_biz_id",
    "alipay_logon_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}