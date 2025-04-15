export { inputParams } from "./schema/root.js"

export const toolName = `alipay_fund_auth_operation_detail_query`
export const toolDescription = `资金授权操作查询接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/fund/auth/operation/detail/query`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "auth_no",
    "operation_id",
    "operation_type",
    "out_order_no",
    "out_request_no",
    "query_options"
  ]
}
export const flatMap = {}