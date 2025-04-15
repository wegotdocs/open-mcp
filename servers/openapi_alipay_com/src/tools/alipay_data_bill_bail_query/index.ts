export { inputParams } from "./schema/root.js"

export const toolName = `alipay_data_bill_bail_query`
export const toolDescription = `支付宝商家账户保证金查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/data/bill/bail/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "start_time",
    "end_time",
    "bail_type",
    "trans_log_id",
    "biz_orig_no"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}