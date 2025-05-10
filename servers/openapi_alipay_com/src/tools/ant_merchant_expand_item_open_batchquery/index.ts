export { inputParams } from "./schema/root.js"

export const toolName = `ant_merchant_expand_item_open_batchquery`
export const toolDescription = `批量查询商品接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/ant/merchant/expand/item/open/batchquery`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "item_id_list"
  ]
}
export const flatMap = {}