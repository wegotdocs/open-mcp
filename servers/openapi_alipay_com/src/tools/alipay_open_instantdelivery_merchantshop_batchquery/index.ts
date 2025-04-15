export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_instantdelivery_merchantshop_batchquery`
export const toolDescription = `即时配送商家门店分页查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/instantdelivery/merchantshop/batchquery`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "page_no",
    "page_size",
    "shop_name",
    "shop_no"
  ]
}
export const flatMap = {}