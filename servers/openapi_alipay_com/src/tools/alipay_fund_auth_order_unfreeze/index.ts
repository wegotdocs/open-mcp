export { inputParams } from "./schema/root.js"

export const toolName = `alipay_fund_auth_order_unfreeze`
export const toolDescription = `资金授权解冻接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/fund/auth/order/unfreeze`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "amount",
    "auth_no",
    "extra_param",
    "notify_url",
    "out_request_no",
    "remark"
  ]
}
export const flatMap = {}