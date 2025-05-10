export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_sp_isv_bill_sync`
export const toolDescription = `服务商账单数据回传`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/sp/isv/bill/sync`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "end_time",
    "generate_time",
    "item_code",
    "out_biz_no",
    "pay_time",
    "price",
    "promotor_pid",
    "start_time",
    "status",
    "sub_promotor_pid"
  ]
}
export const flatMap = {}