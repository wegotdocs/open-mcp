export { inputParams } from "./schema/root.js"

export const toolName = `alipay_trade_batch_transfer_query`
export const toolDescription = `请款分账查询接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/trade/batch/transfer/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "out_request_no",
    "settle_no",
    "extend_params"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}