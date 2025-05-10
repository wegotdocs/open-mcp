export { inputParams } from "./schema/root.js"

export const toolName = `ant_merchant_expand_item_open_query`
export const toolDescription = `查询商品接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/ant/merchant/expand/item/open/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "target_id",
    "scene",
    "target_type",
    "status"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}