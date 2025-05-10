export { inputParams } from "./schema/root.js"

export const toolName = `zhima_credit_pe_zmgo_cumulation_sync`
export const toolDescription = `芝麻go用户数据回传`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/zhima/credit/pe/zmgo/cumulation/sync`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "agreement_no",
    "amount_type_data",
    "biz_action",
    "biz_time",
    "cumulate_data_type",
    "ext_info",
    "has_alipay_trade",
    "open_id",
    "out_biz_no",
    "partner_id",
    "pay_out_biz_no",
    "request_from",
    "task_type_data",
    "user_id"
  ]
}
export const flatMap = {}