export { inputParams } from "./schema/root.js"

export const toolName = `alipay_trade_settle_receivables_query`
export const toolDescription = `待结算查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/trade/settle/receivables/query`
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
    "merchant_info",
    "out_request_no",
    "query_his_date",
    "trade_no"
  ]
}
export const flatMap = {}