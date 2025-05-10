export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_instantdelivery_merchantshop_query`
export const toolDescription = `即时配送商家门店详情查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/instantdelivery/merchantshop/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "shop_no"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}