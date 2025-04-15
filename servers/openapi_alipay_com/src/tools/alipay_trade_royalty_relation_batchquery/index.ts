export { inputParams } from "./schema/root.js"

export const toolName = `alipay_trade_royalty_relation_batchquery`
export const toolDescription = `分账关系查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/trade/royalty/relation/batchquery`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "out_request_no",
    "page_num",
    "page_size"
  ]
}
export const flatMap = {}