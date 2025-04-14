export { inputParams } from "./schema/root.js"

export const toolName = `alipay_offline_market_shop_batchquery`
export const toolDescription = `查询商户的门店编号列表`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/offline/market/shop/batchquery`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "biz_channel",
    "page_no"
  ]
}
export const flatMap = {}