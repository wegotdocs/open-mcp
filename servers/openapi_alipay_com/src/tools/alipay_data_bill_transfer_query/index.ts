export { inputParams } from "./schema/root.js"

export const toolName = `alipay_data_bill_transfer_query`
export const toolDescription = `支付宝商家账户充值，转账，提现查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/data/bill/transfer/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "start_time",
    "end_time",
    "type",
    "page_no",
    "page_size"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}