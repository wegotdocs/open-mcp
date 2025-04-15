export { inputParams } from "./schema/root.js"

export const toolName = `alipay_trade_royalty_relation_bind`
export const toolDescription = `分账关系绑定`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/trade/royalty/relation/bind`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "out_request_no",
    "receiver_list"
  ]
}
export const flatMap = {}