export { inputParams } from "./schema/root.js"

export const toolName = `zhima_merchant_zmgo_cumulate_query`
export const toolDescription = `商家芝麻GO累计数据查询接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/zhima/merchant/zmgo/cumulate/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "agreement_id",
    "user_id",
    "open_id",
    "provider_pid",
    "need_detail",
    "page_no",
    "page_size"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}