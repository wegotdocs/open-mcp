export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_sp_isv_relation_query`
export const toolDescription = `spcenter服务商推广关系查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/sp/isv/relation/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "commodity_id",
    "page_size",
    "page_num"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}