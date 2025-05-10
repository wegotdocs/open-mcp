export { inputParams } from "./schema/root.js"

export const toolName = `alipay_offline_market_shop_category_query`
export const toolDescription = `门店类目配置查询接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/offline/market/shop/category/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "category_id",
    "op_role"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}