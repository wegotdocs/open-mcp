export { inputParams } from "./schema/root.js"

export const toolName = `alipay_fund_auth_operation_cancel`
export const toolDescription = `资金授权撤销接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/fund/auth/operation/cancel`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "auth_no",
    "notify_url",
    "operation_id",
    "out_order_no",
    "out_request_no",
    "remark"
  ]
}
export const flatMap = {}