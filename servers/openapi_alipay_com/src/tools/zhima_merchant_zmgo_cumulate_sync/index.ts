export { inputParams } from "./schema/root.js"

export const toolName = `zhima_merchant_zmgo_cumulate_sync`
export const toolDescription = `商家芝麻GO累计数据回传接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/zhima/merchant/zmgo/cumulate/sync`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "agreement_id",
    "amount_type_sync_data",
    "biz_action",
    "biz_time",
    "data_type",
    "discount_type_sync_data",
    "open_id",
    "out_biz_no",
    "provider_pid",
    "refer_out_biz_no",
    "sub_biz_action",
    "times_type_sync_data",
    "user_id"
  ]
}
export const flatMap = {}