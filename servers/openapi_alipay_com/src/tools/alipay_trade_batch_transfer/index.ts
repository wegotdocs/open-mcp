export { inputParams } from "./schema/root.js"

export const toolName = `alipay_trade_batch_transfer`
export const toolDescription = `请款分账`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/trade/batch/transfer`
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
    "royalty_parameters"
  ]
}
export const flatMap = {}