export { inputParams } from "./schema/root.js"

export const toolName = `alipay_trade_batch_settle`
export const toolDescription = `批量结算`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/trade/batch/settle`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "biz_product",
    "extend_params",
    "out_request_no",
    "settle_clauses",
    "settle_type"
  ]
}
export const flatMap = {}