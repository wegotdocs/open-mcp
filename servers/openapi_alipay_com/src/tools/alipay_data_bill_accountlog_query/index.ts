export { inputParams } from "./schema/root.js"

export const toolName = `alipay_data_bill_accountlog_query`
export const toolDescription = `支付宝商家账户账务明细查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/data/bill/accountlog/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "start_time",
    "end_time",
    "alipay_order_no",
    "merchant_order_no",
    "page_no",
    "page_size",
    "trans_code",
    "agreement_no",
    "agreement_product_code",
    "bill_user_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}