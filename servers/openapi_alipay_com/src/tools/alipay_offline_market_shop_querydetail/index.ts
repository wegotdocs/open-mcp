export { inputParams } from "./schema/root.js"

export const toolName = `alipay_offline_market_shop_querydetail`
export const toolDescription = `查询单个门店信息接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/offline/market/shop/querydetail`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "shop_id",
    "op_role"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}