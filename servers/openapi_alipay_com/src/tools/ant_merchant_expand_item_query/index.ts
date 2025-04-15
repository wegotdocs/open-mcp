export { inputParams } from "./schema/root.js"

export const toolName = `ant_merchant_expand_item_query`
export const toolDescription = `商品查询接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/ant/merchant/expand/item/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "target_type",
    "target_id",
    "undefined_category",
    "front_category_id",
    "status"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}