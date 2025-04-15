export { inputParams } from "./schema/root.js"

export const toolName = `ant_merchant_expand_item_open_delete`
export const toolDescription = `删除商品接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/ant/merchant/expand/item/open/delete`
export const method = `delete`
export const security = []
export const keys = {
  "query": [
    "item_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}