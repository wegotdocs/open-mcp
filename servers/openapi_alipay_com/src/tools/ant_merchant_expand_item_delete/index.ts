export { inputParams } from "./schema/root.js"

export const toolName = `ant_merchant_expand_item_delete`
export const toolDescription = `商品删除接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/ant/merchant/expand/item/delete`
export const method = `delete`
export const security = []
export const keys = {
  "query": [
    "item_id",
    "external_item_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}