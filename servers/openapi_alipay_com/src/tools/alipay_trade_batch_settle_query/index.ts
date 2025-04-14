export { inputParams } from "./schema/root.js"

export const toolName = `alipay_trade_batch_settle_query`
export const toolDescription = `批量结算查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/trade/batch/settle/query`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "extend_params",
    "out_request_no",
    "settle_no"
  ]
}
export const flatMap = {}